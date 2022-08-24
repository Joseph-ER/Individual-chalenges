class BankDisplay{
  constructor(logic){
    this.logic = logic;
  }
  orderStatements(){
    this.logic.statements.reverse(this.logic.statements.date);
  }
  showStatements(){
    this.orderStatements();
    console.log('date || credit ||  debit || balance');
    this.logic.statements.forEach(statement => {
      console.log(`${statement.date} || ${statement.credit} || ${statement.debit} || ${statement.balance} ||`);
    })
  }

}

module.exports = BankDisplay;