let output = "";
const states = [false, true];

/*	Solving Steps
	A'+(B+(BA)')' (Original Expression)
  A'+(B'(BA)'') (By De Morgan's laws)
  A'+(B'(BA))   (By involution)
  A'+(B'BA))    (By associative rule)
	=A'           (By complementary rule)
*/
output += "<h2>Turth Table A'+B+(BA)')'</h2>";
output += "<style>th, td { padding: 5px; }</style>";
output += "<table border=\"1\">";
output += "<tr>";
output += "<th>A</th>";
output += "<th>B</th>";
output += "<th>Complex</th>";
output += "<th>Simple</th>";
output += "<th>Result</th>";
output += "</tr>";

for (let indexA = 0; indexA < states.length; indexA++)
{
    for (let indexB = 0; indexB < states.length; indexB++)
    {
		let A = states[indexA];
		let B = states[indexB];
		let complex = !A||!(B||!(B&&A));
		let simple = !A;
		output += "<tr>";
		output += `<td>${A}</td>`;
		output += `<td>${B}</td>`;
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
