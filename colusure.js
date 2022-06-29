function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
} //function theke func ke return kora jae

let clock1 = stopWatch();
console.log(clock1);