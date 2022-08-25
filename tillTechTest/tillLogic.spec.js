const TillLogic = require('./tillLogic');
const HipsterCoffee = require('./hipsterCoffee.json');

describe('TillLogic tests',() => {
  it('prints price list',() => {
    const till = new TillLogic(HipsterCoffee);
    expect(till.showMenu()).toEqual(HipsterCoffee.prices);
  });
})