const favNum = 27;
function add(first, second) {
    console.log(mood); //undefined
    // variable declare kora hoise etake she upr porjnto niye jae ei kaj ke hoisting bole, but pore je abr maan set kora hoise etake r upr porjnto niye jae na 
    const result = first + second;

    if (result > 9) {
        var mood = "happy";
        mood = 'cranky';
        console.log(mood);
    }
    //block er vitore mood ke declare kora hoise and amra oke console log krso
    console.log(mood); //evabe bahirer theke korte gele error dibe
    //let diye korleo jabe na 
    //but var diye korle jabe
    return result;



}
const sum = add(11, 35);
//global can be use in local, but local can't go for global
//hoisting problem er karone amra var ke use krbo na

