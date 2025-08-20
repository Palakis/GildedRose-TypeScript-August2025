# Development log

## First things first

Among the three test suite examples included, I picked Vitest for its speed and closeness to Jest.

The first step before doing any else was to write unit tests to cover existing behaviour and make sure the app keeps its existing behaviour during refactoring. Alongside unit tests, I chose the keep the existing TextTest approval test to complement the "source of truth" provided by my unit tests.

In addition to the [thoroughly-written requirements](../GildedRoseRequirements.md), I treated the source code itself as another piece of "specification".

## The Refactor

I started the refactor by putting each class into its own file and moving the business logic of `GildedRose::updateQuality` into the `Item` class (putting business logic in unrelated places can make the codebase confusing).

I modified the `Item` class to make the attributes `private` and added public getters to prevent direct manipulation of the class' internal state.

`protected` setters were added to `Item`for the `quality` and `sellIn` attributes to apply custom logic to changes made by the subclasses (actual example : keeping the value of `quality` between 0 and 50 without duplicating code).

At this point, the `Item` class became the `BaseItem` class, its type definition was spun off into `ItemInterface` for use in other places in the app, and the `updateQuality` method was then made `abstract`.

Subclasses were then implemented for each item type:

- `StandardItem` is for... well, standard items
- `AgedItem` is for items that increase in quality as they age. For instance, Aged Bries
- `LegendaryItem` is for items like Sulfuras that never age and never lose quality
- `VipTicketItem` is for items like Backstage Passes that increase in quality as they age, with a higher quality increase near their sell-by date, but drop to zero-value after the sell-by date (because they can't be used for a past event)

Each subclass of `BaseItem` overrides `updateQuality` (which was renamed to `update` in the process) to implement the update logic specific to each item type, and it makes the code _much easier_ to understand and maintain. By doing this, we've gone from a complicated monolith to simpler code with proper separation of concerns.

This approach makes it easy to add a `ConjuredItem` subclass that implements the behaviour for this new item type.

## The Goblin

If you've read the requirements, you may have noticed a paragraph saying that the `Item` class and the `GuildedRose::items` attribute should not be modified unless one wants to face consequences from a territorial Goblin.

Software Engineering is teamwork. As engineers, we have to make our work easier for our teammates, ourselves, and our future selves. We have to understand that the code we write is not ours-only, and that its ownership is shared with our teammates.

Furthermore, we should not hesitate to rework pieces of code that feel incorrect, hard to understand or make it harder to implement new features. We should do so kindly so that the author of the original code can learn and improve (even seniors!), and also accept feedback on works of our own.

I have indeed modified the `Item` class against the recommendation of the requirements document, because the Goblin works in a team.

## Idempotency

One area of improvement for the app is making sure things do go sideways if `update` is called more than once on the same day.

A few options:

- The simple one:
  - On each item, store the timestamp of the last update and use it to prevent updates less than 24 hours after the last call
  - Drawback : if `update` is not fired for some reason, a day of updates will not be accounted for
- The correct one:
  - On each item, store `addedOn` and `sellBy` timestamps and compute `quality` from these values.
