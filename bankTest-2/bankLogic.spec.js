const BankLogic = require('./bankLogic');


describe('BankLogic tests',()=>{
  it('is created with a balance of 100',()=>{
    const bank = new BankLogic(100);
    expect(bank.balance).toEqual(100);
  });
  it('deposit class increases balance by 100',()=>{
    const bank = new BankLogic(0);
    bank.deposit(100);
    expect(bank.balance).toEqual(100);
  })
});