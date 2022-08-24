class BankLogic{
  constructor(balance){
    this.balance = balance;
  }

  deposit(deposit){
    this.balance += deposit;
  }

}

module.exports = BankLogic;