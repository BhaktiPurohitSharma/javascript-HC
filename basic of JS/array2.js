
const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman' ]
marvel_heros.push(dc_heros); //chnges original glass
console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1]); //flash


const marvel_heros1=["thor","ironman","spiderman"];
const dc_heros1=["superman","flash","batman"];

const newArr1=marvel_heros1.concat(dc_heros1); //does not change original aaray 
console.log(newArr1); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const newArr2=[...marvel_heros1,...dc_heros1];
console.log(newArr2); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const newArr3=[1,2,3,[4,5,6],7,[8,[9,10]]];
console.log(newArr3); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, [ 9, 10 ] ] ]
const newArr4=newArr3.flat(Infinity);
console.log(newArr4);  // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(Array.isArray("Bhakti")); //false
console.log(Array.from("Bhakti"));  //[ 'B', 'h', 'a', 'k', 't', 'i' ]
console.log(Array.from({name:"Bhakti"})); 

let score1=100;
let score2=200;
let score3=300;
let score4=400;

console.log(Array.of(score1,score2,score3,score4));



