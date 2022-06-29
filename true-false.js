const x = false; //false
const x = true;//true
const x = 5; //true
const x = -10; //true
const x = 0; //false
const x = 'salman'; //true
const x = ''; //false
const x = ' ';//true
const x;//false
const x = null;//false
const x = NaN;//false
const x = parseInt('hello');//false
const x = {}; //true
const x = []; //true


if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}


let x;
console.log('value of x', x); //undefined
let x = parseInt('hello');
console.log('value of x', x); //NaN
