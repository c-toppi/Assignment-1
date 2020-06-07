function calculateBMI()
{
	let weightRef = document.getElementById("weight");
	let heightRef = document.getElementById("height");
	let resultRef = document.getElementById("result");

	let weight = weightRef.value;
	let height = heightRef.value;

	let result = weight / Math.pow(height,2);

	resultRef.innerText = result.toFixed(1);
}

// TODO: Task 1
document.getElementById("submit").addEventListener("click", calculateBMI);

// TODO: Task 2
document.getElementById("weight").addEventListener("change", calculateBMI);

document.getElementById("height").addEnentListener("change", calculateBMI);
