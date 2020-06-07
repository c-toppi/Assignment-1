let numArray = [-40,23,-15,4,7,18,-29,35,58,95,-167,678];
let positiveOddNumbers = [];
let negativeEvenNumbers = [];

console.log("Positive odd numbers:");
for (let prop in numArray)
{
	positiveOddNumbers += prop + numArray[prop] + "<br />";
	if (numArray[prop] > 0 && numArray[prop] %2 != 0)
		console.log(numArray[prop]);
}

console.log("Negative even numbers:");
for (let prop in numArray)
{
	negativeEvenNumbers+= prop + numArray[prop] + "<br />";
	if (numArray[prop] < 0 && numArray[prop] %2 == 0)
		console.log(numArray[prop]);
}
