## My aproach

I started testing the reduce, and increase sellIn and quality methods to make sure they worked properly. After this, I looked in detail into the rules for the store as well as specific item rules and gradually created new methods or improved older ones to bit by bit until all the rules had been covered.

## Code structure

Update quality method is first as it decides what methods are run on each item, so also works as a guide for directing others through my program. The following tests have a more generalised usage, but become more specialised further down the lines.

## To run

Install dependencies
  npm install

Then navigate to 'test' directory and run below in terminal
  texttest_fixture.js

This will run the program and output a list of the item names, sellIn and quality values.
Image below as reference

![Screenshot of GildedRose program](https://imgur.com/undefined.png)

## Running tests

To run all tests

npm test

To run all tests in watch mode

npm run test:watch

To generate test coverage report

npm run test:coverage
