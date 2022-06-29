function welcomeMessage(name) {
    console.log(name);
    name();
}
// const name = 'Tom';
// const names = ['tom', 'jerry', 'cruise'];
// const myObj = {
//     name: 'Tom',
//     age: 11
// }
function greetMorning() {
    console.log('Good morning');
}
welcomeMessage(greetMorning);
