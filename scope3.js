const favNum = 27; //global variable
//jekono place theke eke access  kora jabe
function add(first, second) {
    const result = first + second; //local variable
    //sudhu vitore eder ke access kora jabe 
    console.log(result);
    return result;
}
const sum = add(11, 35);
console.log(favNum);
