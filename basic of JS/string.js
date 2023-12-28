const name="Bhakti";
const repoCount=99;

//old way to concat string
console.log(name+repoCount+" value");

//new way to concat string 
//string interpolation which create placeholder

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Purohit');

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.length);
console.log(gameName.__proto__);//will gives object
console.log(gameName.toLowerCase());
console.log(gameName.substring(0,4));
console.log(gameName.includes('x'));
console.log(gameName.slice(-8,4));

const str1="      sharma    ";
console.log(str1.trim());

const url="https://bhakti.com/bhakti%20sharma";
console.log(url.replace('%20','_'));

console.log(url.includes('bhakti'));

console.log(url.split('/'));
