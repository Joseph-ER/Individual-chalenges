class BankLogic{
  constructor(balance){
    this.balance = balance;
    this.deposited = 0;
  }

  deposit(deposit){
    this.balance += deposit;
  }

  withdraw(withdraw){
    this.balance -= withdraw;
  }

}

module.exports = BankLogic;