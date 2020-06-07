function saveEnrolmentDetails()
{
  let resultRef = document.getElementById("enrolmentResult");
	let fnameRef = document.getElementById("fname");
	let lnameRef = document.getElementById("lname");
	let calRef = document.getElementById("cal");
	let genderRef = "";
  let gender = document.getElementsByName("gender");
  for(let i=0; i<gender.length; i++){
    if(gender[i].checked){
      genderRef += gender[i].value;
    }
  }
	let addRef = document.getElementById("add");
	let emailRef = document.getElementById("email");
  let phoneRef = document.getElementById("phone");

	let student = {
		firstName: fnameRef.value,
		lastName: lnameRef.value,
		dateOfBirth: calRef.value,
		gender: genderRef,
		address: addRef.value,
		emailAddress: emailRef.value,
    phoneNumber: phoneRef.value,
	};
  console.log(student.address);
  let out = "Student Name: " + student.firstName + ", " + student.lastName.toUpperCase() + "<br>" + "Date Of Birth: " + student.dateOfBirth + "<br>" + "Gender: " + student.gender + "<br>" + "Address: "+ student.address + "<br>"  + "Email: " + student.emailAddress + "<br>" + "Contact Number: " + student.phoneNumber + "<br>";
}

document.getElementById("enrol").addEventListener("click", saveEnrolmentDetails);
