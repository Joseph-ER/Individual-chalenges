/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const { isTypedArray } = require('util/types');
const View = require('./view');
const Api = require('./api');
const Model = require('./model');
const { doesNotMatch } = require('assert');
require('jest-fetch-mock').enableMocks();
 
 
 describe('View',() => {
   beforeEach(()=> {
     document.body.innerHTML = fs.readFileSync('./index.html');
     fetch.resetMocks()
   });

   isTypedArray('displays peeps from API when called', (done) => {
    const peepApi = new Api();
    const peepModel =  new Model();

    const peepView = new View(peepModel, peepApi);
    peepView.displayPeepsFromApi(()=> {
      expect(document.body.querySelectorAll('div.Peep').length).toEqual(1);
      done();
    });
  });

   });