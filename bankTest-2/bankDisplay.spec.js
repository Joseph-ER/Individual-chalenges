const BankDisplay = require("./bankDisplay");
const BankLogic = require("./bankLogic");
jest.mock('./bankLogic');

describe('BankDisplay and BankLogic integration tests',()=>{
  beforeEach(()=> {
    BankLogic.mockClear();
  })
  it('BankDisplay has access to BankLogic.statements',() => {
    const bankLogic = new BankLogic;
    bankLogic.statements = [];
    const bank = new BankDisplay(bankLogic);
    expect(bank.logic.statements).toEqual([]);
  });
  it('orderStatements method reorders by date so 1st in array is most recent',() => {
    const mockLogic = new BankLogic();
    mockLogic.statements = [{balance: 100, date: '01/01/20'}, {balance: 100, date: '01/02/20'}];
    const bank = new BankDisplay(mockLogic);
    expect(bank.logic.statements[0]).toEqual({"balance": 100,"date": "01/01/20"})
    bank.showStatements();
    expect(bank.logic.statements[0]).toEqual({"balance": 100,"date": "01/02/20"})
  });
});