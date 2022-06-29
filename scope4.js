const favNum = 27;
function add(first, second) {
    const result = first + second;
    console.log(result);
    console.log(favNum);
    return result;
    // console.log(favNum); ekhane dile hbe na karon return er por not allowed
}
const sum = add(11, 35);
//global can be use in local, but local can't go for global

