/* 


*/
let first;
// console.log(first); //undefined




function second(x, y) {
    const sum = x + y;
    //return nai tai undefined

}
const result = second(3, 91);




function second(x, y) {

    document.getElementById('sum');
    //shob kaj korsi domimplement krsi but 
    //return nai tai undefined

}
const result = second(3, 91);
console.log(result);


////////
function add(a, b) {
    const sum = a + b;

    return; //return krsi but ki return krsi ta bolini undefined + porer part execute e hbe na 
    const fun = a * b;
    return sum;
}

///////////
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
//conditional return tai porer code run holeo exact ki return korte chai ta bole deini tai undefined dibe
const fourth = add(2, 7);
console.log(fourth)

////////////////////
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);
//2nd pm ke call korini tai undefined



////////////////
const fifth = { name: 'sogir', age: 15, location: 'bandarbon' };
console.log(fifth.phone); //phone name kno propety nai tai undefined


////////////
const sixth = [54, 12, 41, 31];
// console.log(sixth[4])
//undefined
delete sixth[2];
// console.log(sixth[2]);

