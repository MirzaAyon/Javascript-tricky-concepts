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
const x = {}; //true //obj
const x = []; //true //array


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


// notes are below
/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/
