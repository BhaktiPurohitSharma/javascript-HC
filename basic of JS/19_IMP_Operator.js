// Nullish Coalescing Operator (??): null undefined
// used to provide value if  get return value from function,expresion etc are null/undefined


let val1;
// val1 = 5 ?? 10           //5
// val1 = null ?? 10        //10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20      //10
console.log(val1);




// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") //more than 80
