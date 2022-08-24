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
  });
  it('withdraw class reduces balance by 100',()=>{
    const bank = new BankLogic(100);
    bank.withdraw(100);
    expect(bank.balance).toEqual(0);
  });
  it('is created with empty this.deposit',() => {
    const bank = new BankLogic(0);
    expect(bank.deposited).toEqual(0);
  });
  it('is created with empty this.withdrawn',() => {
    const bank = new BankLogic(0);
    expect(bank.withdrawn).toEqual(0);
  });
});