class Bank{
  constructor(balance){
    this.balance = balance;
    this.statement = [];
  }
  deposit(ammount, date){
    this.balance += ammount;
    this.statement.push({date: date, ammount: ammount, balance: this.balance});
  }
  
  withdraw(ammount, date){
    if (this.balance >= ammount){
      this.balance -= ammount;
      this.statement.push({date: date, ammount: ammount, balance: this.balance});
    }else{
      console.error('Not enough in account');
    }
  }

  bankStatement(){
    console.log('date ||   ammount   || balance');
    this.statement.reverse(this.statement.date);
    this.statement.forEach (action => {
      console.log(`${action.date}||${action.ammount}||${action.balance}`);
    });
  }
}

const BankSys = new Bank(0);

BankSys.deposit(1000,'10/01/2023');
BankSys.deposit(2000,'13/01/2023');
BankSys.withdraw(500,'14/012023');
BankSys.bankStatement();

module.exports = Bank;