let dataArray = [515, 523, 512, 504, 564, 535, 526, 596, 577, 508, 530, 578, 594, 538, 521, 599, 561, 585, 584, 550, 567];
const ARRAY_SIZE = 20;

function movingAverage(data, limit){
	if (data.length > 20){
	data.shift();
	}

	let sum = data.reduce(function (a,b){
	return (a + b);
	} , 0);
	let average = sum/limit;
	return average;
}


console.log(movingAverage(dataArray, ARRAY_SIZE));
