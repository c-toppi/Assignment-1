/**
 * main.js
 * This file contains code that runs on load for index.html
 */

// TODO: Write the function displayLockers
function displayLockers(data)
{
  let displayRef = document.getElementById("lockerDisplay");
  let output = "";
  for (let i = 0; i < data.lockers.length; i++) {
    output += `<div class="mdl-cell mdl-cell--4-col">`;
    output += `    <div class="mdl-card mdl-shadow--2dp locker" style="background-color:${data.lockers[i].color}">`;
    output += `        <div class="mdl-card__title mdl-card--expand">`;
    output += `            <h2>${data.lockers[i].id}</h2>`;
    output += `            <h4>=&nbsp;${data.lockers[i].label}</h4>`;
    output += `        </div>`;
    output += `        <div class="mdl-card__actions mdl-card--border">`;
    output += `            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="openLocker" onclick="view(${i})">Open Locker</a>`;
    output += `            <div class="mdl-layout-spacer"></div>`;
    output += `            <i class="material-icons">lock</i>`;
    output += `        </div>`;
    output += `   </div>`;
    output += `</div>`;
  }
  displayRef.innerHTML = output;
  console.log(data);
}

// TODO: Write the function addNewLocker
function addNewLocker()
{
  let enterId = prompt("Please enter an ID");
  lockers.addLocker(enterId);
  updateLocalStorage(lockers);
  displayLockers(lockers);
}

// TODO: Write the function view
function view(index)
{
  let openRef = document.getElementById("openLocker");
  openRef.addEventListener("click", view);
  localStorage.setItem(LOCKER_INDEX_KEY, index);
  window.location = "view.html";
}

// TODO: Write the code that will run on load here
displayLockers(lockers);
