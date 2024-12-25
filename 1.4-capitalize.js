let name = prompt("What's your name?: ")
let first = name.slice(0,1);
let upper = first.toUpperCase();
let rest = name.slice(1, name.length);
let lower = rest.toLowerCase();
let capitalized = upper + lower;
console.log(capitalized);
