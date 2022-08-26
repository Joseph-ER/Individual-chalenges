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
    expect(receipt.orderTotal).toEqual(1.0864);

  })
});