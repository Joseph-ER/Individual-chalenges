const TillLogic = require('./tillLogic');
const ReceiptLogic = require('./receiptLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

const tillLogic = new TillLogic(HipsterCoffee);
const cafe = new ReceiptLogic(tillLogic);

cafe.till.showMenu();
cafe.till.placeOrder('Americano',2);
cafe.showReceipt();
