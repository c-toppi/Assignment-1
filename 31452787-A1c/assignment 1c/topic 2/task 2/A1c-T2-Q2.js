class Employee
{
	constructor(id="", fName="", lName="", payRate="", eAddress="", dob="", eGender="", cPosition=""){
		this._id = id;
		this._firstName = fName;
		this._lastName = lName;
		this._hourlyPayRate = payRate;
		this._address = eAddress;
		this._dateOfBirth = dob;
		this._gender = eGender;
		this._positionAtTheCompany = cPosition;
		this._qualification = [];
	}

	get id() {
		return this._id;
	}
	get firstName() {
		return this._firstName;
	}
	get lastName() {
		return this._lastName;
	}
	get hourlyPayRate() {
		return this._hourlyPayRate;
	}
	get address() {
		return this._address;
	}
	get dateOfBirth() {
		return this._dateOfBirth;
	}
	get gender() {
		return this._gender;
	}
	get positionAtTheCompany() {
		return this._positionAtTheCompany;
	}
	get qualification() {
		return this._qualification;
	}
	get numOfQualifications() {
		return this._qualification.length;
	}

	set id(newId){
		this._id = newId;
	}
	set firstName(newName){
		this._firstName = newName;
	}
	set lastName(newName){
		this.lastName = newName;
	}
	set hourlyPayRate(newHourlyPayRate){
		this._hourlyPayRate = newHourlyPayRate;
	}
	set address(newAddress){
		this._address = newAddress;
	}
	set dateOfBirth(newDateOfBirth){
		this._dateOfBirth = newDateOfBirth;
	}
	set gender(newGender){
		this._gender = newGender;
	}
	set positionAtTheCompany(newPositionAtTheCompany){
		this._positionAtTheCompany = newPositionAtTheCompany;
	}
	addQualification(newQualification)
	{
		this._qualification.push(newQualification);
	}

	toString(){
		return (
			`ID: ${this._id}
			<br> Name: ${this._firstName}, ${this._lastName}
			<br> Address: ${this._address}
			<br> Gender: ${this._gender}
			<br> Date of Birth: ${this._dateOfBirth}
			<br> Position: ${this._positionAtTheCompany} | Hourly Rate: ${this._hourlyPayRate}
			<br> Qualifications:
			${this._qualification}`
		);
	}
}

let tTanks = new Employee("1239875125", "Tom", "Tanks", "$80/hour", "25A Rose Street Clayton 3168", "19/03/1988", "Male", "Software Engineer");
tTanks.addQualification("BSc Engineering");
tTanks.addQualification("Diploma in Computer Science");
console.log(tTanks);
