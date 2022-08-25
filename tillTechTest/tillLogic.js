const HipsterCoffee = require('./hipsterCoffee.json');
class TillLogic{
  constructor(shopDetails){
    this.shop = JSON.stringify(shopDetails);
    this.prices = null;
    this.menu = null
    this.formatData();
  }

  formatData(){
    this.shop =JSON.parse(this.shop.slice(1,-1));
    this.prices = this.shop.prices;
    this.menu = JSON.parse(JSON.stringify(this.shop.prices).slice(1,-1));
    this.menu = JSON.stringify(this.menu).slice(1,-1);
    this.menu = this.menu.split(",");
  }

  showMenu(){
    this.menu.forEach(item=>{
      console.log(item);
    });
  }
}

const till = new TillLogic(HipsterCoffee);
till.showMenu();

module.exports = TillLogic;