class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality(){
    for (let i = 0; i < this.items.length; i++) {
        switch (this.items[i].name){
          case 'Aged Brie':
            this.increaseQuality(this.items[i]);
            this.reduceSellIn(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.backstagePassManager(this.items[i]);
            this.reduceSellIn(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
          case 'Sulfuras, Hand of Ragnaros':
            this.reduceSellIn(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
          case 'Elixir of the Mongoose':
            this.reduceSellIn(this.items[i]);
            this.reduceQuality(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
          case '+5 Dexterity Vest':
            this.reduceSellIn(this.items[i]);
            this.reduceQuality(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
          case 'Conjured Mana Cake':
            this.reduceSellIn(this.items[i]);
            this.reduceQuality(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
        }
      }
      return this.items;
    }

  backstagePassManager(item){
    if (item.sellIn > 5 && item.sellIn <=10){
      item.quality += 2;
    } else if (item.sellIn <= 5 && item.sellIn > 0){
      item.quality += 3;
    }else if (item.sellIn < 0){
      item.quality = 0;
    }
  }

  reduceSellIn(item){
    item.sellIn -= 1;
  }

  reduceQuality(item){
    if (item.name.includes('Conjured')){
      this.conjuredReduceQuality(item);
      return;
    }
    if (item.sellIn > 0){
        item.quality -= 1;
    }else{
      item.quality -= 2;
    }
  }

  conjuredReduceQuality(item){
    if (item.sellIn > 0){
      item.quality -= 2;
    }else{
     item.quality -= 4;
    }
  }


  increaseQuality(item){
    if (item.quality < 50){
      item.quality += 1;
    }
  }

  qualityLimiter(item){
    if (item.quality > 50){
      item.quality = 50;
    }else if (item.quality < 0){
      item.quality = 0;
    }
  }
}

module.exports = {
  Item,
  Shop
}
