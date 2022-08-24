class BankLogic{
  constructor(balance){
    this.balance = balance;
    this.deposited = 0;
    this.withdrawn = 0;
    this.statement = [];
  }

  deposit(deposit,date){
    this.withdrawn = 0;
    this.deposited = deposit;
    this.balance += deposit;
  }

  withdraw(withdraw,date){
    this.deposited = 0;
    this.withdrawn = withdraw;
    this.balance -= withdraw;
  }

}

module.exports = BankLogic;