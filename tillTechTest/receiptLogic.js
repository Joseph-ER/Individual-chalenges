class ReceiptLogic{
  constructor(till){
    this.order = till.order;
    this.orderTotal = till.orderTotal;
    this.shopName = till.shop["shopName"];
    this.shopAddress = till.shop["address"];
    this.shopPhone = till.shop["phone"];
    this.vat = 8.64;
  }

  addVat(){
    this.orderTotal += (this.orderTotal/100)*this.vat;
  }

  
}


module.exports = ReceiptLogic;