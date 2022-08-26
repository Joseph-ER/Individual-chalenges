const TillLogic = require('./tillLogic');
const ReceiptLogic = require('./receiptLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

const tillLogic = new TillLogic(HipsterCoffee);
const receipt = new ReceiptLogic(tillLogic);
tillLogic.showMenu();
receipt.till.placeOrder('Americano',2);
receipt.showReceipt();