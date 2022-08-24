class BankLogic{
  constructor(balance){
    this.balance = balance;
  }

  deposit(deposit){
    this.balance += deposit;
  }

  withdraw(withdraw){
    this.balance -= withdraw;
  }

}

module.exports = BankLogic;