class BankDisplay{
  constructor(logic){
    this.logic = logic;
  }

  showStatements(){
    console.log('date || credit ||  debit || balance');
  }

}

module.exports = BankDisplay;