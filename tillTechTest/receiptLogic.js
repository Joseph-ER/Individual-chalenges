const TillLogic = require('./tillLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

class ReceiptLogic{
  constructor(till){
    this.order = till.order;
  }
}


const till = new TillLogic(HipsterCoffee);
till.placeOrder("Tea",1)
const test = new ReceiptLogic(till)
console.log(test.order);

module.exports = ReceiptLogic;