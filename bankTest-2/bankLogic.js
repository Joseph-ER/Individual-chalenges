class BankLogic {
	constructor (balance) {
		this.balance = parseFloat(balance);
		this.deposited = parseFloat(0);
		this.withdrawn = parseFloat(0);
		this.statements = [];
	}

	deposit (deposit, date) {
		this.withdrawn = parseFloat(0);
		this.deposited = parseFloat(deposit);
		this.balance += this.deposited;
		this.statements.push({ date, credit: this.deposited.toFixed(2), debit: this.withdrawn.toFixed(2), balance: this.balance.toFixed(2) });
	}

	withdraw (withdraw, date) {
		this.deposited = parseFloat(0);
		this.withdrawn = parseFloat(withdraw);
		this.balance -= this.withdrawn;
		this.statements.push({ date, credit: this.deposited.toFixed(2), debit: this.withdrawn.toFixed(2), balance: this.balance.toFixed(2) });
	}
}

module.exports = BankLogic;
