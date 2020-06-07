class Ship
{
	constructor(sName = "", mFuel = "", sClass = "", sDescription = "", sOwner = "", mSpeed = "", sStatus = "")
	{
		this._shipName = sName;
		this._location = [];
		this._maxFuel = mFuel;
		this._shipClass = sClass;
		this._description = sDescription;
		this._owner = sOwner;
		this._maxSpeed = mSpeed;
		this._status = sStatus;
	}

	get shipName(){
		return this._shipName;
	}
	get location(){
		return this._location;
	}
	get maxFuel(){
		return this._maxFuel;
	}
	get shipClass(){
		return this._shipClass;
	}
	get description(){
		return this._description;
	}
	get owner(){
		return this._owner;
	}
	get maxSpeed(){
		return this._maxSpeed;
	}
	get status(){
		return this._status;
	}

	set shipName(newName){
		this._shipName = newName;
	}
	set location(newLocation){
		this._location = newLocation;
	}
	set maxFuel(newFuel){
		this._maxFuel = newFuel;
	}
	set shipClass(newClass){
		this._shipClass = newClass;
	}
	set description(newDescription){
		this._description = newDescription;
	}
	set owner(newOwner){
		this._owner = newOwner;
	}
	set maxSpeed(newSpeed){
		this._maxSpeed = newSpeed;
	}
	set status(newStatus){
		this._status = newStatus;
	}
	addLocation(newLocation)
	{
		this._location.push(newLocation);
	}

  toString(){
		return "Ship name: " + this._shipName + "<br>" + "Description: " + this._description + "<br>" + "Max Speed: " + this._maxSpeed + " | Max Fuel: " + this._maxFuel + " | Owner: " + this._owner + " | Status: " + this._status + "<br>" + "Current Location: " + this._location;
	}
}

let hamburgExpress = new Ship("Hamburg Express", "30000000 litres", "Cargo", "Hamburg Express offers worldwide logistics solutions and express services.", "Hapag-lloyd", "21.5 knots", "Available");
hamburgExpress.addLocation("Latitude: -34.4039424");
hamburgExpress.addLocation("Longitude: 150.8723968");
console.log(hamburgExpress);
