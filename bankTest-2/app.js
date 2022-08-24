const Banklogic = require('./bankLogic');
const BankDisplay = require('./bankDisplay');

//Creation of the classes for users
const bankLogic = new Banklogic(0);
const bank = new BankDisplay(bankLogic);

//Example usage of the app
bank.logic.deposit(1000,'10/01/2023');
bank.logic.deposit(2000,'13/01/2023');
bank.logic.withdraw(500,'14/01/2023');
bank.showStatements();