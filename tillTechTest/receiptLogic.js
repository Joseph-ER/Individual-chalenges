class ReceiptLogic{
  constructor(till){
    this.till = till;
    this.shopName = till.shop["shopName"];
    this.shopAddress = till.shop["address"];
    this.shopPhone = till.shop["phone"];
    this.vat = 8.64;
    this.calculatedvat = 0;
  }

  addVat(){
    this.calculatedvat = (this.till.orderTotal/100)*this.vat;
    this.till.orderTotal += this.calculatedvat;
  }

  showReceipt(){
    this.addVat();
    console.log(this.receiptHeader());
    console.log(this.receiptBody());
  }
  receiptHeader(){
    return(`Date: ${this.till.date}\n${this.shopName}\n${this.shopAddress}\n${this.shopPhone}\n------------`);
  }

  receiptBody(){
    return(`Order: \n${this.till.order.join("\n")}\nVAT: £${this.calculatedvat.toFixed(2)}\nTotal: £${this.till.orderTotal.toFixed(2)}\n------------`);
    // ${this.till.order.forEach(item=>{console.log(`${item}`)})}
    // this.till.order.forEach(item=> {
    //   console.log(`${item}`);
    // })
    // console.log('------------');
    // console.log(`VAT: £${this.calculatedvat.toFixed(2)}`);
    // console.log(`Total: £${this.till.orderTotal.toFixed(2)}`);
    // console.log('------------');
  }

  
}


module.exports = ReceiptLogic;