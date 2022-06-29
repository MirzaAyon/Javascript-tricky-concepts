const favNum = 27;
function add(first, second) {
    const result = first + second;
    if (result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    //block er vitore mood ke declare kora hoise and amra oke console log krso
    return result;
    // console.log(mood); //evabe bahirer theke korte gele error dibe


}
const sum = add(11, 35);
//global can be use in local, but local can't go for global

