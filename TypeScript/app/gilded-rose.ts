export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") return;
      if (item.name === "Aged Brie") {
        this.items[index].quality++;
        this.items[index].sellIn--;
        return;
      }
      if (item.name.includes("Backstage passes")) {
        if (item.sellIn <= 0) {
          this.items[index].quality = 0;
          return;
        }
        if (item.sellIn <= 5) {
          this.items[index].quality += 3;
          this.items[index].sellIn--;
          return;
        }
        if (item.sellIn <= 10) {
          this.items[index].quality += 2;
          this.items[index].sellIn--;
          return;
        }
        this.items[index].quality++;
        this.items[index].sellIn--;
        return;
      }
      if (item.name.includes("Conjured")) {
        if (item.sellIn < 0) {
          this.items[index].quality -= 4;
          if (this.items[index].quality < 0) this.items[index].quality = 0;
          this.items[index].sellIn--;
          return;
        }
        this.items[index].quality -= 2;
        if (this.items[index].quality < 0) this.items[index].quality = 0;
        this.items[index].sellIn--;
        return;
      }
      if (item.sellIn < 0) {
        this.items[index].quality -= 2;
        if (this.items[index].quality < 0) this.items[index].quality = 0;
        this.items[index].sellIn--;
        return;
      }
      this.items[index].quality--;
      if (this.items[index].quality < 0) this.items[index].quality = 0;
      this.items[index].sellIn--;
      return;
    });
    return this.items;
  }
}
