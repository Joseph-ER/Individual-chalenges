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
});
