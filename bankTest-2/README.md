## My approach
I approached this task from the addition or subtraction of ammounts withdrawn or deposited before focusing on the key-value pairs for the display of the bank statement.

I then moved onto a new class for just the display functionality, so each class has 1 functionality.

I mocked the BankLogic class in the tests for BankDisplay so as to not rely on the other class while testing.

I structured this code with as few functions as possible for better readability and to not overcomplicate the code.

I also added an 'app.js' file so it is even easier for the user to use.

## How to install
Download the directory to your local machine.

Navigate to inside the directory in the terminal.

Run 'npm install' to make sure dependencies are installed.

## How to use:
Open 'app.js' in the main directory. On lines 5 and 6 the 2 classes are created. The bankLogic is currently constructed with '0' in the bank due to the number in brackets, but this can be changed if you wish. banklogic is used to create the main app- bank.

To deposit money follow this example below or on line 9 of app.js. In brackets enter the ammount (1000) followed by the date in the same format as the example.
 "bank.logic.deposit(1000,'10/01/2023');"

To withdraw it is very similar to the deposit. Below or line 11 is an example. Here I withdraw (500)
 "bank.logic.withdraw(500,'14/12/2023');"

To view the bank statement, follow the example below or line 12.
 "bank.showStatement();"

 Use the line 'node app.js' in terminal while in directory of bankTest-2 to run the program with your changes. You should see a similar layout to the image below.

![Screenshot of app](https://imgur.com/undefined.png)

## How to test:
Use the below in thethe terminal while in directory bankTest-2 to run jest tests.
  jest

To see test coerage run the below in the terminal while in directory bankTest-2
  jest --coverage

## How to use linter:
Use 'npx eslint FILENAME' in terminal while in directory of bankTest-2 to run eslint where 'FILENAME' is the file to test. Example is below
  'npx eslint bankLogic.js'