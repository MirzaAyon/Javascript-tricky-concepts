function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
} //function theke func ke return kora jae

let clock1 = stopWatch();
console.log(clock1()); //1bar call
console.log(clock1()); //2 bar call
let clock2 = stopWatch();
console.log(clock2()); //1bar call
console.log(clock2()); //2 bar call
console.log(clock2()); //3 bar call
console.log(clock1());
//jokhn jake return korbo takei show korbe   