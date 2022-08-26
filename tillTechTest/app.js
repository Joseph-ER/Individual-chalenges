const TillLogic = require('./tillLogic');
const ReceiptLogic = require('./receiptLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

const tillLogic = new TillLogic(HipsterCoffee);
tillLogic.showMenu();