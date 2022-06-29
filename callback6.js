function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}

function greetMorning(name) {
    console.log('Good morning', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Jerry Hanks', greetAfternoon);
welcomeMessage('Miki Mouse', greetEvening);



