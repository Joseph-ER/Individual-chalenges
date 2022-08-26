const ReceiptLogic = require('./receiptLogic')
const TillLogic = require('./tillLogic');
jest.mock('./tillLogic');


describe('ReceiptLogic tests',() => {
  beforeEach(()=> {
    TillLogic.mockClear();
  });
  it('has correct shop details',()=>{
    const shopDetails = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    };
    const mockTill = new TillLogic(shopDetails);
    mockTill.order = [];
    mockTill.shop = shopDetails;
    const receipt = new ReceiptLogic(mockTill);
    expect(receipt.shopName).toEqual('The Coffee Connection');
    expect(receipt.shopAddress).toEqual('123 Lakeside Way');
    expect(receipt.shopPhone).toEqual('16503600708');
  });
  it('adds VAT to order total',() => {
    const shopDetails = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    };
    const mockTill = new TillLogic(shopDetails);
    mockTill.orderTotal = 1;
    mockTill.shop = shopDetails;
    const receipt = new ReceiptLogic(mockTill);
    receipt.addVat()
    expect(receipt.till.orderTotal).toEqual(1.0864);
  });
  it('receiptHeader correctly formats and includes date, name of shop, address and number',() => {
    const shopDetails = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    };
    const mockTill = new TillLogic(shopDetails);
    mockTill.shop = shopDetails;
    mockTill.order = [ [ 'Americano', 3.75 ], [ 'Americano', 3.75 ] ]
    mockTill.orderTotal = 7.5;
    mockTill.date = '2022-08-26T11:41:43.590Z';
    const receipt = new ReceiptLogic(mockTill);
    expect(receipt.receiptHeader()).toEqual('Date: 2022-08-26T11:41:43.590Z\nThe Coffee Connection\n123 Lakeside Way\n16503600708\n------------');
  });
  it('receiptBody correctly formats and includes order, VAT and total',() => {
    const shopDetails = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    };
    const mockTill = new TillLogic(shopDetails);
    mockTill.shop = shopDetails;
    mockTill.order = [ [ 'Americano', 3.75 ], [ 'Americano', 3.75 ] ]
    mockTill.orderTotal = 7.5;
    mockTill.date = '2022-08-26T11:41:43.590Z';
    const receipt = new ReceiptLogic(mockTill);
    receipt.addVat();
    expect(receipt.receiptBody()).toEqual('Order: \nAmericano,3.75\nAmericano,3.75\nVAT: £0.65\nTotal: £8.15\n------------');
  });
  it('tests showReceipt runs methods inside',() => {
    const shopDetails = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
    };
    const mockTill = new TillLogic(shopDetails);
    mockTill.shop = shopDetails;
    mockTill.order = [ [ 'Americano', 3.75 ], [ 'Americano', 3.75 ] ]
    mockTill.orderTotal = 7.5;
    mockTill.date = '2022-08-26T11:41:43.590Z';
    const receipt = new ReceiptLogic(mockTill);
    expect(receipt.calculatedvat).toEqual(0);
    receipt.showReceipt();
    expect(receipt.calculatedvat.toFixed(2)).toEqual("0.65");
  })
});