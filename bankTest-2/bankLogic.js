class BankLogic {
	constructor (balance) {
		this.balance = parseInt(balance);
		this.deposited = 0;
		this.withdrawn = 0;
		this.statements = [];
	}

	deposit (deposit, date) {
		this.withdrawn = 0;
		this.deposited = deposit;
		this.balance = deposit;
		this.statements.push({ date, credit: this.deposited, debit: this.withdrawn, balance: this.balance });
	}

	withdraw (withdraw, date) {
		this.deposited = 0;
		this.withdrawn = withdraw;
		this.balance -= withdraw;
		this.statements.push({ date, credit: this.deposited, debit: this.withdrawn, balance: this.balance });
	}
}

module.exports = BankLogic;
