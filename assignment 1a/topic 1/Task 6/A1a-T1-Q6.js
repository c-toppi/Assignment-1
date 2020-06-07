let a = new Date (2000,5,4).getTime();
let b = new Date().getTime();
let age = b - a;

let mspy = new Date (2001,0,1).getTime() - new Date (2000,0,1).getTime();

let ageyears = Math.floor(age / mspy);

console.log (ageyears);
