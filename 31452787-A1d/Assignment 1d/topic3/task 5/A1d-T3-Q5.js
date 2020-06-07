
let output = "";
const states = [false, true];

/* 	(AB'(C+BD)+A'B')C		(Original Expression)
	(AB'C+AB'BD+A'B')C		(By Distributive rule)
	(AB'C+A'B')C					(By Complementary rule)
	AB'CC+A'B'C						(By distributive rule)
	AB'C+A'B'C						(By idempotence)
	C(AB'+A'B')						(By distributive rule)
	C(B'(A+A'))						(By distributive rule)
	C(B')									(By Complementary rule)
	CB'										(By associative laws)
*/

output += "<h2>Truth Table (AB'(C+BD)+A'B')C</h2>";
output += "<style>th, td { padding: 5px; }</style>";
output += "<table border=\"1\">";
output += "<tr>";
output += "<th>A</th>";
output += "<th>B</th>";
output += "<th>C</th>";
output += "<th>D</th>";
output += "<th>Complex</th>";
output += "<th>Simple</th>";
output += "<th>Result</th>";
output += "</tr>";

for (let indexA = 0; indexA < states.length; indexA++)
{
	for (let indexB = 0; indexB < states.length; indexB++)
	{
		for (let indexC = 0; indexC < states.length; indexC++)
		{
			for (let indexD = 0; indexD < states.length; indexD++)
			{
				let A = states[indexA];
				let B = states[indexB];
				let C = states[indexC];
				let D = states[indexD];
				let complex = (A&&!B&&(C||B&&D)||!A&&!B)&&C;
				let simple = C&&!B;
				output += "<tr>";
				output += `<td>${A}</td>`;
				output += `<td>${B}</td>`;
				output += `<td>${C}</td>`;
				output += `<td>${D}</td>`;
				output += `<td>${complex}</td>`;
				output += `<td>${simple}</td>`;
				output += `<td>${complex === simple}</td>`;
				output += "<tr>";
			}
		}
	}
}

output += "</table><br>";

// if output is to the playground
let outputAreaRef = document.getElementById("outputArea");
outputAreaRef.innerHTML = output;
// if output is to a blank html page
// document.body.innerHTML = output;
