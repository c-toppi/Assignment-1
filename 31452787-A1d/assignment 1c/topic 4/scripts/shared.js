/**
 * shared.js
 * This file contains shared code that runs on both view.html and index.html
 */

// Constants used as KEYS for LocalStorage
const LOCKER_INDEX_KEY = "lockerIndex";
const LOCKER_DATA_KEY = "lockerData";

// TODO: Write code to implement the Locker class
class Locker{
  constructor(id="", label="", locked=false, pin="", color="#3399ff", contents=""){
    this._id = id;
    this._label = label;
    this._locked = locked;
    this._pin = pin;
    this._color = color;
    this._contents = contents;
  }
  get id(){
    return this._id;
  }
  get label(){
    return this._label;
  }
  get locked(){
    return this._locked;
  }
  get pin(){
    return this._pin;
  }
  get color(){
    return this._color;
  }
  get contents(){
    return this._contents;
  }
  set label(text){
    this._label = text;
  }
  set locked(state){
    this._locked = state;
  }
  set pin(pin){
    this._pin = pin;
  }
  set color(color){
    this._color = color;
  }
  set contents(text){
    this._contents = text;
  }
  /*toString() {
    return `ID: ${this._id} <br> Label: ${this._label} <br> Locked: ${this._locked} <br> Pin: ${this._pin} <br> Colour: ${this._color} <br> Contents: ${this._contents}`;
  }*/
  fromData(data)
  {
    this._id = data._id;
    this._label = data._label;
    this._locked = data._locked;
    this._pin = data._pin;
    this._color = data._color;
    this._contents = data._contents;
  }
}

// TODO: Write code to implement the LockerList class
class LockerList
{
  constructor(lockers = [])
  {
    this._lockers = lockers;
  }
  get lockers()
  {
    return this._lockers;
  }
  get count()
  {
    return this._lockers.length;
  }
  addLocker(id)
  {
    let addedLocker = new Locker(id);
    this._lockers.push(addedLocker);
  }
  getLocker(index)
  {
    return this._lockers[index];
  }
  removeLocker(id)
  {
    for (let i = 0; i < this._lockers.length; i++)
    {
      if (this._lockers[i].id == id)
      {
        this._lockers.splice(i, 1);
      }
    }
  }
  fromData(data)
  {
    let array = data._lockers;
    this._lockers = [];
    for (let i = 0; i < array.length; i++)
    {
      let newLocker = new Locker();
      newLocker.fromData(array[i]);
      this._lockers.push(newLocker);
    }
  }
}
// Global LockerList instance variable
let lockers = new LockerList();

// TODO: Write the function checkIfDataExistsLocalStorage
function checkIfDataExistsLocalStorage()
{
	let dataExist = localStorage.getItem(LOCKER_DATA_KEY);
	if (!dataExist) {
    return false;
	}
	else
  {
    if (typeof dataExist == null)
    {
			return false;
    }
		else if (typeof dataExist == undefined)
    {
			return false;
    }
		else if (dataExist == "") {
     	 	return false;
		}
    else
    {
      return true;
    }
	}
}

// TODO: Write the function updateLocalStorage
function updateLocalStorage(data)
{
	let jsonString = JSON.stringify(data);
	// key is already defined as a constant LOCKER_DATA_KEY
	localStorage.setItem(LOCKER_DATA_KEY, jsonString);
}

// TODO: Write the function getDataLocalStorage
function getDataLocalStorage()
{
	let jsonString = localStorage.getItem(LOCKER_DATA_KEY);
  return JSON.parse(jsonString);
}

// TODO: Write the code that will run on load here
if (checkIfDataExistsLocalStorage() == true)
{
  let savedData = getDataLocalStorage();
  lockers.fromData(savedData);
}
else
{
	lockers.addLocker("A1");
  updateLocalStorage(lockers);
}
