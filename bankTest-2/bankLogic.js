class BankLogic{
  constructor(balance){
    this.balance = balance;
    this.deposited = 0;
    this.withdrawn = 0;
  }

  deposit(deposit){
    this.withdrawn = 0;
    this.deposited = deposit;
    this.balance += deposit;
  }

  withdraw(withdraw){
    this.deposited = 0;
    this.withdrawn = withdraw;
    this.balance -= withdraw;
  }

}

module.exports = BankLogic;