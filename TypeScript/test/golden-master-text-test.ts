import { GildedRose } from "../app/gilded-rose";
import {
  StandardItem,
  AgedItem,
  LegendaryItem,
  VipTicketItem,
} from "../app/items";

console.log("OMGHAI!");

const items = [
  new StandardItem("+5 Dexterity Vest", 10, 20), //
  new AgedItem("Aged Brie", 2, 0), //
  new StandardItem("Elixir of the Mongoose", 5, 7), //
  new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80), //
  new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
  new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new VipTicketItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new StandardItem("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(element.name + ", " + element.sellIn + ", " + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
