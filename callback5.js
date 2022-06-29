function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const name = 'Tom';
// const names = ['tom', 'jerry', 'cruise'];
// const myObj = {
//     name: 'Tom',
//     age: 11
// }
function greetMorning(name) {
    console.log('Good morning', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Jerry Hanks', greetMorning);
