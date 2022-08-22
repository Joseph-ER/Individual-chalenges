const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("Tests that item added foo returns name foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  describe('reduceSellin',() => {
      it('reduces sellIn by 1',() => {
        const gildedRose = new Shop([new Item("foo", 1, 1)]);
        gildedRose.reduceSellIn(gildedRose.items[0]);
        expect(gildedRose.items[0].sellIn).toBe(0);
      });
  });
  describe('reduceQuality',() => {
    it('reduceQuality reduces quality by 1',() => {
        const gildedRose = new Shop([new Item("foo", 1, 1)]);
        gildedRose.reduceQuality(gildedRose.items[0]);
        expect(gildedRose.items[0].quality).toBe(0);
      });
      it('reduceQuality reduces quality by 2 when sellIn ==0',() => {
        const gildedRose = new Shop([new Item("foo", 0, 2)]);
        gildedRose.reduceQuality(gildedRose.items[0]);
        expect(gildedRose.items[0].quality).toBe(0);
      });
  });
  describe('increaseQuality',()=>{
    it('increaseQuality increases by 1',() => {
      const gildedRose = new Shop([new Item("foo", 0, 1)]);
      gildedRose.increaseQuality(gildedRose.items[0]);
      expect(gildedRose.items[0].quality).toBe(2);
    });
    it('increaseQuality will not increase above 50',() => {
      const gildedRose = new Shop([new Item("foo", 0, 50)]);
      gildedRose.increaseQuality(gildedRose.items[0]);
      expect(gildedRose.items[0].quality).toBe(50);
    });
  });
  describe('UpdateQuality can identify items from shop and run appropriate actions',() => {
    it('for aged brie',() => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 2)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(3);
    });
    it('for backstage pass',() => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(50);
    });
    it('for backstage pass under 5 days left',() => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 0)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(3);
    });
    it('for backstage pass after show should be 0',() => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 50)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(0);
    });
    it('for +5 dexterity vest',() => {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(19);
    });
    it('for Sulfuras, Hand of Ragnaros',() => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(50);
    });
    it('for Elixir of the Mongoose',() => {
      const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(6);
    });
    it('for Elixir of the Mongoose value below 0',() => {
      const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 0)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(0);
    });
    it('for Conjured Mana Cake',() => {
      const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(4);
    });
    it('for Conjured Mana Cake sellIn < 0',() => {
      const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 10)]);
      gildedRose.updateQuality(gildedRose.items[0])
      expect(gildedRose.items[0].quality).toEqual(6);
    });
  });
});
