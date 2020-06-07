// Line 22, Syntax, Account number must be equal to 9, not equal to or less than, therefore the symbol <= on line 22 should actually be ==.
// Line 15, syntax, The function on line 15 was never initiated as it was missing a {, hence on line 15 after the close of brackets ")", it is essential to place a "{".
// line 34, syntax, There was a previously unmatched { as a result of implementing a for loop on line 26, to resolve this a new line was created and "}" was added to close the for loop, this can be seen on line 34.
// Line 37-40, logic, The if statement on line 22 was never accompanied by an else statement, hence one has been put in for when the account number is not 9 digits long, this can be seen on lines 37-40.
// Line 59, Syntax, change what is printed to "The amount withdrawn is invalid" to show that it is invalid
// Line 46-55, Logic, added an if else statement to screen for whether or not the account had enough funds reaining to make the withdrawal, because otherwise the account was allowed to enter negative values which it cannot do.
// Line 66, Logic, The currentAmount was not changing to reflect the new amount of the account for further withdrawals, hence line 66 has been added to update the account balance.

let bankAccountsList = {
		126347869: 200,
		234539790: 400,
		348079070: 900
};

function withdrawMoney(amount, accountNumber){
	let currentAmount = 0;
	let message = "";
	let counter = 0;
	let accountFound = true;

	// check length of the accountNumber
	if(accountNumber.length == 9)
	{
		accountNumber = Number(accountNumber);

		for(let account in bankAccountsList)
		{
			if(account == accountNumber)
			{
				currentAmount = bankAccountsList[account];
				message = "<br/>" + "Account: " + account + "<br/>";
				message += "Money in the account: $" + currentAmount + "<br/>";

			}
		}
	}
	else
	{
		return "<br/>" + "Account: " + accountNumber + "<br/>" + "The bank account does not exist";
	}

	if(accountFound)
	{
		if(amount <= 2000 && amount > 0)
		{
			if(amount <= currentAmount)
			{
				currentAmount = currentAmount - amount;
				message += "Amount withdrawn: $" + amount + "<br/>";
				message += "Updated account balance $" + currentAmount;
			}
			else
			{
				message += "The account has insufficient balance to make this withdrawal";
			}
		}
		else
		{
			message += "The amount withdrawn is invalid";
		}
	}
	else
	{
		message += "<br/>" + accountNumber + " bank account does not exist" + "<br/>";
	}
	bankAccountsList[accountNumber] = currentAmount;
	return message;
}

console.log(withdrawMoney(100, "348079070"));
console.log(withdrawMoney(-10, "126347869"));
console.log(withdrawMoney(2001, "234539790"));
console.log(withdrawMoney(1, "234539790"));
console.log(withdrawMoney(100, "126347869"));
console.log(withdrawMoney(500, "234539790"));
console.log(withdrawMoney(50, "34567790"));
