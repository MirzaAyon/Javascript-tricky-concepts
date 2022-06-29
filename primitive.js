/* 
Data types
primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
7. symbol
non-primitive
6. object
*/

// primitive - era shohoj SpeechRecognitionResultList, eder ekta maan thakbe 


// non primitive - eder onk gula maan thake

let a = 'hello';
console.log(a);
let b = a;
console.log(b);
console.log(a, b);
a = 'gello';
console.log(a, b);
//primitive er khetre age jei maan ta paise sheta kei dhore rakhe, new kore r update hoyna jemon b er khetre bujha jae



//non primitive
const x = {
    job: 'web developer'
}
const y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);
y.job = 'backend developer';
console.log(x, y);
//ekta change korle arekta change hoye jae eta non primitive 