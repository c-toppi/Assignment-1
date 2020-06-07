let output = "";
const states = [false, true];

/*	Solving Steps
	Y’(Y+Z)+(Z+YY)(Y+Z’) (original expression)
	Y’(Y+Z)+(Z+Y)(Y+Z’)  (By idempotence)
	Y’Y+Y’Z+(Z+Y)(Y+Z’)  (By distributive laws)
	Y’Z+(Z+Y)(Y+Z’)      (By complementary rule)
	Y’Z+Z+Y(Y+Z’)        (By distributive laws)
	Y’Z+Z+YY+YZ’         (By distributive laws)
  Y’Z+Z+Y+YZ’          (By idempotence)
  Y’Z+Z+Y              (By Absorption)
  Z+Y                  (By Absorption)
*/
output += "<h2>Turth Table Y’(Y+Z)+(Z+YY)(Y+Z’)</h2>";
output += "<style>th, td { padding: 5px; }</style>";
output += "<table border=\"1\">";
output += "<tr>";
output += "<th>Y</th>";
output += "<th>Z</th>";
output += "<th>Complex</th>";
output += "<th>Simple</th>";
output += "<th>Result</th>";
output += "</tr>";

for (let indexY = 0; indexY < states.length; indexY++)
{
    for (let indexZ = 0; indexZ < states.length; indexZ++)
    {
		let Y = states[indexY];
		let Z = states[indexZ];
		let complex = !Y&&(Y||Z)||(Z||Y&&Y)&&(Y||!Z);
		let simple = Z||Y;
		output += "<tr>";
		output += `<td>${Y}</td>`;
		output += `<td>${Z}</td>`;
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
