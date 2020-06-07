let names = ["Henry", "John", "john", "Frank", "John", "John Doe"];
let target = "John";

let num = 0;

function searchAndCount(dataArray, target){

	for (let i = 0; i <= dataArray.length; i++)
	if (dataArray[i] == target)
	{
		num++;
	}
	return num;
}

console.log(searchAndCount(names, target));
