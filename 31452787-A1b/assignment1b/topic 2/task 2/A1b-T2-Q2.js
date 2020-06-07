function multiply (num1, num2){
	let output = num1 * num2;
	return output;
}
//num1=2 and num2=4
console.log(multiply(2,4));

//Convert to anonymous function
let multiplication = function(num1, num2){
	let result = num1 * num2;
	return result;
};
console.log(multiplication(2,4));
