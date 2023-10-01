
var x = 10;

function test() {
    var x = 40;
    console.log(x);
}
var x = 50;
console.log(x);
// value of x will be 50 now

var blank;
console.log(blank); // blan


// Issue with variable
var flag = "hi love";
var y = 2;
if (y > 0) {
    var flag = 'hi you are hacked';
}
console.log(flag);


// let
// scope: block scope

let myFlag = "hi love";
let y1 = 2;
if (y1 > 0) {
    let myFlag = 'hi you are hacked';
}
console.log(myFlag);
