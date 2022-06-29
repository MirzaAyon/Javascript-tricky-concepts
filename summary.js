const a = 'Alim uddin';
const b = 23;
const c = true;
// null
// undefined

// primitive 
// object

const nums = [23, 12, 56, 34];
// console.log(typeof nums);
//ekahne array show korbe karon js e array ek dhoron er obj
// Array.isArray(nums);
//eta diye check korle bole dibe that eta array naki array na

function triple(x, y, z) {
    x.age = 88888;
    // y = 2222;
    // z = 333;
}
// console.log(typeof triple);
// console.log(triple.length); //func ekdhoron er obj , length ta pm er number onujai decide hbe 
//js e primitive type baad dile baki shob gula ek dhoron er obj
console.log(typeof null); //obj
//oneke mone kore null je obj eta js er ekta mistake
//why type of null is a obj   
const num1 = 3;
const num2 = 5;
const num3 = 7;
// triple(num1, num2, num3);
const myObj = { name: 'kuddus', age: 17 };
triple(myObj);
console.log(myObj);
//etar karon obj shob shomoe reference hishebe thake
// console.log(num1, num2, num3);
// console.log(typeof null);

//double equal er bpr ta
// string number true false er bpr ta besi imp