let income = 60000;

let taxBracket = " ";
let taxDue = 0;

if (income >= 0 && income <= 18200);
{
	taxBracket = "Nil";
	taxDue = 0;
}
if (income >= 18201 && income <= 37000);
{
	taxBracket = "19c for each $1 over $18,200";
	taxDue = (income - 18201) * 0.19;
}
if (income >= 37001 && income <= 90000);
{
	taxBracket = "$3,572 plus 32.5c for each $1 over $37,000";
	taxDue = ((income - 37000) * 0.325) + 3572;
}
if (income >= 90001 && income <= 180000);
{
	taxBracket = "$20,797 plus 37c for each $1 over $90,000";
	taxDue = ((income - 90000) * 0.37) + 20797;
}
if (income >= 180001)
{
	taxBracket = "$52,097 plus 45c for each $1 over $180,000";
	taxDue = ((income - 180000) * 0.45) + 52097;
}

console.log("Someone who earns $" + income + " will be taxed $" + taxDue.toFixed(2));
