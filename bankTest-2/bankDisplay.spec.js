const BankDisplay = require("./bankDisplay")
const BankLogic = require('./bankLogic');

describe('BankDisplay and BankLogic integration tests',()=>{
  it('BankDisplay has access to BankLogic.statements',() => {
    const bankLogic = new BankLogic;
    const bank = new BankDisplay(bankLogic);
    expect(bank.logic.statements).toEqual([]);
  });
  it('orderStatements method reorders by date so 1st in array is most recent',() => {
    const bankLogic = new BankLogic;
    const bank = new BankDisplay(bankLogic);
    bank.logic.deposit(100,'01/01/20');
    bank.logic.deposit(100,'01/02/20');
    expect(bank.logic.statements[0]).toEqual({"balance": 100, "credit": 100, "date": "01/01/20", "debit": 0})
    bank.orderStatements();
    expect(bank.logic.statements[0]).toEqual({"balance": 100, "credit": 100, "date": "01/02/20", "debit": 0})
  });
});