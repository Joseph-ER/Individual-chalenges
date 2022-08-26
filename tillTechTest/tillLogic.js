class TillLogic{
	constructor(shopDetails){
		this.shop = JSON.stringify(shopDetails);
		this.items = null;
		this.menu = null;
		this.formatData();
		this.order= [];
		this.orderTotal = 0;
		this.date = new Date(Date.now());
	}

	formatData(){
		this.shop = JSON.parse(this.shop.slice(1,-1));
		this.items = this.shop.prices;
		this.items = JSON.parse(JSON.stringify(this.items).slice(1,-1));
		this.menu = JSON.stringify(this.items).slice(1,-1);
		this.menu = this.menu.split(',');
	}

	showMenu(){
		console.log('------------');
		console.log('Menu: ');
		console.log('------------');
		this.menu.forEach(item=>{
			console.log(item);
		});
		console.log('------------');
	}

	placeOrder(order, ammount){
		for (let x = 0; x < ammount; x++){
			this.order.push([order, this.items[order]]);
			this.orderTotal += this.items[order];
		}
	}
}

module.exports = TillLogic;