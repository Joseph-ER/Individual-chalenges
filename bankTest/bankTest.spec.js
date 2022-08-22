const Bank = require('./bankTest');

describe('Bank test',() => {
  it('displays bank balance', ()=> {
    const BankSys = new Bank(100);
    expect(BankSys.balance).toEqual(100);
  });

  it('Deposit increases bank balance',()=>{
    const BankSys = new Bank(0);
    BankSys.deposit(100);
    expect(BankSys.balance).toEqual(100);
  });

  it('Withdraw reduces bank balance',()=>{
    const BankSys = new Bank(100);
    BankSys.withdraw(50);
    expect(BankSys.balance).toEqual(50);
  });

});