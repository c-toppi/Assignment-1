/**
 * view.js
 * This file contains code that runs on load for view.html
 */

// TODO: Write the function displayLockerInfo
function displayLockerInfo(locker)
{
  let out = ""
  let outRef = document.getElementById("lockerContents");
  out += `<p>Locker Id: ${locker._id}</p>`;
  out += `<p>Label: ${locker._label}</p>`;
  out += `<p>Colour: ${locker._color}</p>`;
  out += `<p>Contents: ${locker._contents}</p>`;
  outRef.innerHTML = out;

  let deleteRef = document.getElementById("deleteLocker");
  deleteRef.addEventListener("click", deleteThisLocker);
}

// TODO: Write the function unlock
function unlock(locker)
{
  let typePin = prompt("Please Enter the Lockers PIN");
  if (typePin == locker._pin) {
    locker._locked = false;
    clear(locker._pin);
    displayLockerInfo(locker);
  }
  else {
    alert("Your PIN was incorrect")
    window.location = "index.html";
  }
}

// TODO: Write the function deleteThisLocker
function deleteThisLocker(){
  if (confirm("Are you very sure?")) {
    // runs if user clicks 'OK'
    lockers.removeLocker(locker._id);
    updateLocalStorage(lockers);
    alert("This Locker has been removed");
    window.location = "index.html";
  }
  else {
    // runs if user clicks 'Cancel'
  }
}

// TODO: Write the function lockLocker
function lockLocker(){
  if (confirm("Are you very sure?")) {
    // runs if user clicks 'OK'
    let pinOne = prompt("Please Enter a PIN");
    let pinTwo = prompt("Please Enter the PIN another time");
    if (pinOne != pinTwo) {
      alert("Error, the PIN's you have entered do not match");
    }
    else {
      //let update = (lockers.pin = pinOne.value);
      locker._pin = pinTwo;
      locker._locked = true;
      let cont = document.getElementById("lockerContents");
      locker._contents = cont.value;
      let lab = document.getElementById("lockerLabel");
      locker._label = lab.value;
      let colour = document.getElementById("lockerColor");
      locker._color = colour.value;
      updateLocalStorage(lockers);
      alert("This Locker is locked");
      window.location = "index.html";
    }
  }
  else {
    // runs if user clicks 'Cancel'
  }
}

// TODO: Write the function closeLocker
function closeLocker(){
  if (confirm("Are you very sure?")) {
    // runs if user clicks 'OK'
    let cont = document.getElementById("lockerContents");
    locker._contents = cont.value;
    let lab = document.getElementById("lockerLabel");
    locker._label = lab.value;
    let colour = document.getElementById("lockerColor");
    locker._color = colour.value;
    updateLocalStorage(lockers);
    alert("The Locker has been closed but not locked");
    window.location = "index.html";
  }
  else {
    // runs if user clicks 'Cancel'
  }
}

// Retrieve the stored index from local storage
let index = localStorage.getItem(LOCKER_INDEX_KEY);
// using the getLocker method, retrieve the current Locker instance
let locker = lockers.getLocker(index);

// TODO: Write the code that will run on load here
if(locker._locked == false) {
  displayLockerInfo(locker);
}
else {
  unlock(locker);
}
