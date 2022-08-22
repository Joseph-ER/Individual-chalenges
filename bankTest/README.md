Run 'npm install' to make sure dependencies are installed.

I approached this task from the addition or subtraction of ammounts withdrawn or deposited before focusing on the key-value pairs for the display of the bank statement.

I structured this code with as few functions as possible for better readability and to not overcomplicate the code.

How to use:

Write code in bankTest.js from line 28 onwards, but keep content on line 30 as this is related to the testing.
Define a new instance of Bank class (I chose BankSystem) and in the brackets after Bank enter how much money will be in the account (I chose 0)
 "const BanBankSystem = new Bank(0);"

To deposit money follow this example below and in brackets enter the ammount (1000) followed by the date in the same format as the example'
 "BanBankSystem.deposit(1000,'10/01/2023');"

To withdraw it is very similar to the deposit, but you must not withdraw more than is in your account.
 "BanBankSystem.withdraw(500,'14/012023');"

To view the bank statement, follow the example.
 "BanBankSystem.bankStatement();"

 Use the line 'node bankTest.js' in terminal while in directory of BankTest to run the program with your changes. You should see a similar layout to the image below.

![Screenshot of app](https://imgur.com/P160F99.png)

How to test:
Usee 'jest' in the terminal while in directory bankTest to run jest tests.

How to use linter:
Use 'npx eslint bankTest.js' in terminal while in directory of bankTest to run eslint.