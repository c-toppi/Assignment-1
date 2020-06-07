
let output = "";
const states = [false, true];

/* 	Solving Steps
	(X+Y)(XZ+XZ')+XY+Y	(Original Expression)
	(X+Y)(XZ+XZ')+Y			(By Absorption)
	(X+Y)+Y							(By Complementary rule)
	X+Y+Y								(By Associative rule)
	=X+Y								(By idempotence)
*/

output += "<h2>Truth Table (X+Y)(XZ+XZ')+XY+Y</h2>";
output += "<style>th, td { padding: 5px; }</style>";
output += "<table border=\"1\">";
output += "<tr>";
output += "<th>X</th>";
output += "<th>Y</th>";
output += "<th>Z</th>";
output += "<th>Complex</th>";
output += "<th>Simple</th>";
output += "<th>Result</th>";
output += "</tr>";

for (let indexX = 0; indexX < states.length; indexX++)
{
	for (let indexY = 0; indexY < states.length; indexY++)
	{
		for (let indexZ = 0; indexZ < states.length; indexZ++)
		{
			let X = states[indexX];
			let Y = states[indexY];
			let Z = states[indexZ];
			let complex = (X||Y)&&(X&&Z||X&&!Z)||X&&Y||Y;
			let simple = X||Y;
			output += "<tr>";
			output += `<td>${X}</td>`;
			output += `<td>${Y}</td>`;
			output += `<td>${Z}</td>`;
			output += `<td>${complex}</td>`;
			output += `<td>${simple}</td>`;
			output += `<td>${complex === simple}</td>`;
			output += "<tr>";
		}
	}
}

output += "</table><br>";

// if output is to the playground
let outputAreaRef = document.getElementById("outputArea");
outputAreaRef.innerHTML = output;
// if output is to a blank html page
// document.body.innerHTML = output;
