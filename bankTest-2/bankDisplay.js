class BankDisplay{
  constructor(logic){
    this.logic = logic;
  }
  orderStatements(){
    this.logic.statements.reverse(this.logic.statements.date);
  }
  showStatements(){
    console.log('date || credit ||  debit || balance');
  }

}

module.exports = BankDisplay;