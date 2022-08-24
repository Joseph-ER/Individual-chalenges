const Banklogic = require('./bankLogic');
const BankDisplay = require('./bankDisplay');

const bankLogic = new Banklogic(0);
const bankDisplay = new BankDisplay(bankLogic);
bankLogic.deposit(1000,'10/01/23');
bankLogic.deposit(2000,'13/01/23');
bankLogic.withdraw(500,'14/02/23');
bankDisplay.showStatements();