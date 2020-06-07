let dataArray = [2,2,3,3,3,4,5,5,7,8,8,34,45,45,67,67,95,96,567,578];

let sum = dataArray.reduce(function(a, b){
	return (a + b);
} , 0);
let mean = sum / dataArray.length;
console.log("Mean: " + mean.toFixed(2));
console.log("");

//the array is already in ascending order
let middle = dataArray.length / 2;
let median = dataArray[middle];
console.log("Median: " + median);
console.log("");

let total = 0;
let N = dataArray.length;
for (let i = 0; i < N; i++){
	total += Math.pow(dataArray[i] - mean, 2);
}
let sd = Math.sqrt(total / N);
console.log("Standard deviation: " + sd.toFixed(2));
