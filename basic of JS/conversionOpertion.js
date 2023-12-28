let score="33abc";
console.log(typeof score); //string
let valueNumber=Number(score); //to convert into number
console.log(typeof valueNumber); //number
console.log(valueNumber); //NaN

let score1="33";
console.log(typeof score1); //string
let valueNumber1=Number(score1); //to convert into number
console.log(typeof valueNumber1); //number
console.log(valueNumber1); //33

let score2="true";
console.log(typeof score2); //string
let valueNumber2=Number(score2); //to convert into number
console.log(typeof valueNumber2); //number
console.log(valueNumber2); //nan

let score3=true;
console.log(typeof score3); //boolean
let valueNumber3=Number(score3); //to convert into number
console.log(typeof valueNumber3); //number
console.log(valueNumber3); //1

//"33"->33
//"33abc"->NaN
//true->1
//false->0


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

//1->true
//0->false
//""->false
//"bhhb"->true

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);//33
console.log(typeof stringNumber)//string
