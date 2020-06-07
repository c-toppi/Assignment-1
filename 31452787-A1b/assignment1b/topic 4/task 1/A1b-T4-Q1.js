function enrolStudent()
{
  let resultRef = document.getElementById("resultArea");
	let fnameRef = document.getElementById("fname");
	let lnameRef = document.getElementById("lname");
	let calRef = document.getElementById("cal");
	let genRef = document.getElementById("gen");
	let countRef = document.getElementById("count");
	let addRef = document.getElementById("add");
	let emailRef = document.getElementById("email");

	let student = {
		firstName: fnameRef.value,
		lastName: lnameRef.value,
		dateOfBirth: calRef.value,
		gender: genRef.value,
		country: countRef.value,
		address: addRef.value,
		emailAddress: emailRef.value,
	};
  let out = "Student Name: " + student.firstName + ", " + student.lastName.toUpperCase() + "<br>" + "Date Of Birth: " + student.dateOfBirth + "<br>" + "Gender: " + student.gender + "<br>"  + "Country: " + student.country + "<br>" + "Address: "+ student.address + "<br>"  + "Email: " + student.emailAddress + "<br>";
	resultRef.innerHTML = out
}

document.getElementById("submit").addEventListener("click", enrolStudent);
