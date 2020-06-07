//let array1 = [1,2,3,4];
//let array2 = [5,6,7,8];
//let array3 = [9,10,11,12];

function theAverage (array1, array2, array3){
	let sum1 = array1.reduce(function(a,b){
		return (a + b);
	} , 0);
	let sum2 = array2.reduce(function(c,d){
		return (c + d);
	} , 0);
	let sum3 = array3.reduce(function(e,f){
		return (e + f);
	} , 0);
	let average = (sum1 + sum2 + sum3) / (array1.length + array2.length + array3.length);
	return average;
}

//console.log(theAverage(array1, array2, array3));
