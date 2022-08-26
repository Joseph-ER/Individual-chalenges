class ReceiptLogic{
  constructor(till){
    this.order = till.order;
    this.orderTotal = till.orderTotal;
    this.shopName = till.shop["shopName"];
    this.shopAddress = till.shop["address"];
    this.shopPhone = till.shop["phone"];
  }

  
}


module.exports = ReceiptLogic;