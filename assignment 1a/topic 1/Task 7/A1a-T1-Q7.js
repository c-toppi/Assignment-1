let a = 5;
let b = 25;
let c = 20;
let d = Math.pow(b,2) - 4 * a * c;
let s = Math.sqrt(d);
let r = (-1 * b + s) / (2 * a);
let t = (-1 * b - s) / (2 * a);

console.log("root = " + r + " or " + t);
