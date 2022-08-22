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
            this.conjuredReduceQuality(this.items[i]);
            this.qualityLimiter(this.items[i]);
            break;
        }
      }
      return this.items;
    }

  backstagePassManager(item){
    if (item.sellIn > 5 && item.sellIn <=10){
      item.quality += 2;
    } else if (item.sellIn >= 5 && item.sellIn > 0){
      item.quality += 3;
    }else if (item.sellIn < 0){
      item.quality = 0;
    }
  }

  reduceSellIn(item){
    item.sellIn -= 1;
  }

  reduceQuality(item){
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

// updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }

//     return this.items;
//   }
}

module.exports = {
  Item,
  Shop
}
