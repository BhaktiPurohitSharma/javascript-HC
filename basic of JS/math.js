console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(23.45623));
console.log(Math.ceil(23.45623));
console.log(Math.floor(23.45623));
console.log(Math.min(3,4,45,89,7,3,5));
console.log(Math.max(3,4,45,89,7,3,5));

console.log(Math.random()); //always gives value between 0 to 1
console.log( (Math.random()*100) +1);
console.log( (Math.floor(Math.random()*100) +1));

const min=10;
const max=20;

//very important
const randomNum=Math.floor( Math.random()* (max-min+1)+min );
console.log(randomNum);