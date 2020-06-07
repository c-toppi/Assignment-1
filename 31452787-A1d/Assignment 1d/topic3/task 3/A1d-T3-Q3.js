let output = "";
const states = [false, true];

/*	Solving Steps
	(B+C)'(B'C)+(C'C)  (Original expression)
	(B+C)'(B'C)        (By complementary rule)
	B'C'B'C            (By De Morgan's laws)
	B'B'C'C            (By associative rule)
	B'C'C              (By idempotence)
	B'0                (By Complementary rule)
	=0                 (By Annulment)
	=False             
*/
output += "<h2>Turth Table (B+C)'(B'C)+(C'C)";
output += "<style>th, td { padding: 5px; }</style>";
output += "<table border=\"1\">";
output += "<tr>";
output += "<th>B</th>";
output += "<th>C</th>";
output += "<th>Complex</th>";
output += "<th>Simple</th>";
output += "<th>Result</th>";
output += "</tr>";

for (let indexB = 0; indexB < states.length; indexB++)
{
    for (let indexC = 0; indexC < states.length; indexC++)
    {
		let B = states[indexB];
		let C = states[indexC];
		let complex = !(B||C)&&(!B&&C)||(!C&&C);
		let simple = !C&&C;
		output += "<tr>";
		output += `<td>${B}</td>`;
		output += `<td>${C}</td>`;
		output += `<td>${complex}</td>`;
		output += `<td>${simple}</td>`;
		output += `<td>${complex === simple}</td>`;
		output += "<tr>";
    }
}

output += "</table><br>";

// if output is to the playground
let outputAreaRef = document.getElementById("outputArea");
outputAreaRef.innerHTML = output;
// if output is to a blank html page
// document.body.innerHTML = output;
