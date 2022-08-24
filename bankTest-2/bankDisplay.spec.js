const BankDisplay = require("./bankDisplay")
const BankLogic = require('./bankLogic');

describe('BankDisplay and BankLogic integration tests',()=>{
  it('BankDisplay has access to BankLogic.statements',() => {
    const bankLogic = new BankLogic;
    const bank = new BankDisplay(bankLogic);
    expect(bank.logic.statements).toEqual([]);
  })
});