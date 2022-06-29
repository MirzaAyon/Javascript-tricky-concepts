const favNum = 27;
function add(first, second) {
    // console.log(mood); //undefined
    // variable declare kora hoise etake she upr porjnto niye jae ei kaj ke hoisting bole, but pore je abr maan set kora hoise etake r upr porjnto niye jae na 
    const result = first + second;

    if (result > 9) {
        let mood = "happy";
        mood = 'cranky';
        // console.log(mood);
    }
    //block er vitore mood ke declare kora hoise and amra oke console log krso
    // console.log(mood); //evabe bahirer theke korte gele error dibe
    //let diye korleo jabe na 
    //but var diye korle jabe
    return result;



}
const sum = add(11, 35);
// console.log(mood);
for (var i = 0; i < 10; i++) {

}
console.log(i); //possible

for (let i = 0; i < 10; i++) {

}
console.log(i); //impossible

//ja ja shikhlam
//global scope
//local scope
//block scope - {} er part tuku
//let const e hoisting hbe na but var e hbe
//let,const, var na dile ta global hoye jae



