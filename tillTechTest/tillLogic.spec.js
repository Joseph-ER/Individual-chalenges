const TillLogic = require('./tillLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

describe('TillLogic tests',() => {
  it('prints price list',() => {
    const till = new TillLogic(HipsterCoffee);
    expect(till.showMenu()).toEqual(HipsterCoffee.prices);
  });
  it('.menu can be viewed by index',() => {
    const till = new TillLogic(HipsterCoffee);
    expect(till.menu[0]).toEqual('"Cafe Latte":4.75');
  });
  it('orderItem adds the item named to the .order array',() => {
    const till = new TillLogic(HipsterCoffee);
    till.placeOrder('Cafe Latte',1);
    expect(till.order[0]).toEqual(['Cafe Latte',4.75]);
  })

})