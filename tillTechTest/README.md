## How to install
Download this repository. Navigate to inside the directory tillTechTest and run the below to install deendencies
 npm install

 ## My approach
First I wanted to be able to display the items in the prices array from the hipsterCoffee.json. This was a bit tricky as I had issues manipulating the JSON, but got there in the end.

Next, I worked to allowthe user to place an order and pass tests for this.

Then, I made the receiptLogic class that displays the receipt in a clear way for the user.

Finally, I reformatted any code I had not reformatted as well as running eslint to make sure my code was formatted correctly.

 ## How to use
Navigate to 'tillTechTest' directory.

Open 'app.js' file. Lines up to and including line 6 are used to set up the app.

To view the menu in terminal use the line
  'cafe.till.showMenu();'

Here is an example of the menu
![Menu screenshot](https://imgur.com/7qWkuoq.png)

To place an order use the line 'receipt.till.placeorder()', but pass in 2 parameters seperated by a comma.
First the item to order form the menu as a string. Second the number of that item you would like to order. The below example is for ordering 2 Americano's.
  cafe.till.placeOrder('Americano',2);

If you want to place another order, use the same line again as many times as necessary.

To view the receipt, run the below line.
  cafe.showReceipt();

Below is an example of a receipt for the order above of 2 Americanos.
![Receipt screenshot](https://imgur.com/qbRyEto.png)

 ## How to test
Use the below in the terminal while in directory 'tillTechTest' to run jest tests.
  jest

To see test coerage run the below in the terminal while in directory 'tillTechTest'
  jest --coverage

 ## How to use Linter
Use the line below in the terminal while in directory of 'tillTechTest' to run eslint. Replace 'tillLogic.js' with the filename you want to test.
  'npx eslint tillLogic.js'

## This is for Version 1 of the test
Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` [file](hipstercoffee.json) has been provided with the list of products sold at this particular coffee shop. 

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake  
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin  

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.