const TillLogic = require('./tillLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

class ReceiptLogic{
  constructor(till){
    this.order = till.order;
  }
}


module.exports = ReceiptLogic;