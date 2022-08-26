const HipsterCoffee = require('./hipsterCoffee.json');
class TillLogic{
  constructor(shopDetails){
    this.shop = JSON.stringify(shopDetails);
    this.prices = null;
    this.menu = null
    this.formatData();
    this.order= [];
  }

  formatData(){
    this.shop =JSON.parse(this.shop.slice(1,-1));
    this.items = this.shop.prices;
    this.items = JSON.parse(JSON.stringify(this.items).slice(1,-1));
    this.menu = JSON.stringify(this.items).slice(1,-1);
    this.menu = this.menu.split(",");
  }

  showMenu(){
    this.menu.forEach(item=>{
      console.log(item);
    });
  }

  placeOrder(order, ammount){
    for (let x = 0; x < ammount; x++){
      this.order.push([order, this.items[order]]);
    }
  }
}

module.exports = TillLogic;