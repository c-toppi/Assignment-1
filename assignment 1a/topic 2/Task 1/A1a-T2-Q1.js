let output = "";

let studentRecord = {
	ENG1002: 75,
	ENG1003: 80,
	ENG1021: 98,
	ENG1051: 55
};

for (let prop in studentRecord)
{
	output += prop + " = " + studentRecord[prop] + "<br />";

	if (studentRecord[prop] <= 49){
		console.log(" (N)");
	}
	else if (studentRecord[prop] >= 50 && studentRecord[prop] <= 59){
		console.log(" (P)");
	}
	else if (studentRecord[prop] >= 60 && studentRecord[prop] <= 69){
		console.log(" (C)");
	}
	else if (studentRecord[prop] >= 70 && studentRecord[prop] <= 79){
		console.log(" (D)");
	}
	else if (studentRecord[prop] >= 80){
		console.log(" (HD)");
	}
}
console.log(output);
