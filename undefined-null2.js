const sixth = [54, 12, 41, 31];
console.log(sixth[4]) //undefined
console.log(sixth)

delete sixth[2];

console.log(sixth);
console.log(sixth[2]); //undefined
//arr er element evabe delete na kore splice diye krbo

const seventh = undefined;
// console.log(seventh);
//undefined

//diff between null and undefined : undefined ami onk khetre pete pari amr bhul er jnno but null shudhu 1 khetrei pabo jdi some how ami value set na kori tokhn
//null diye bujhay jinish tae kno value nai undefined onk kichu bujhate pare buut 2 tai falsy value



///////
const myObj = { name: 'samad', profession: null }