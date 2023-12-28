//array(cpy operation create shallow copy i.e same rfrence point)

const myArr=[0,1,2,3,4,5];
const myHeros=["bhakti","sharma","purohit"];
const arr= new Array(45,'bb',55,66);

console.log(myHeros);
console.log(arr);
console.log(myArr);

console.log(myArr[4]); //4
console.log(myArr[7]); //undefined
myArr.push(9);
myArr.push(10);
console.log(myArr);//[0, 1, 2,  3, 4, 5, 9, 10 ]
myArr.pop();
console.log(myArr); //[0, 1, 2,  3, 4, 5, 9 ]
myArr.unshift(12);
console.log(myArr); //[12,0, 1, 2,  3, 4, 5, 9]
myArr.shift();
console.log(myArr); //[0, 1, 2,  3, 4, 5, 9 ]

console.log(myArr.includes(9)); //true
console.log(myArr.indexOf(3)); //3

const newArr=myArr.join();

console.log(newArr); //0,1,2,3,4,5,9
console.log(typeof newArr); //string

//slice

console.log("before slice myarr",myArr); //[ 0, 1, 2, 3, 4, 5, 9 ]
const arr1=myArr.slice(1,3);
console.log("arr1 ",arr1); //[ 1, 2]
console.log(" after slice myarr",myArr); //[ 0, 1, 2, 3, 4, 5, 9 ]

console.log(" before splice myarr",myArr); //[ 0, 1, 2, 3, 4, 5, 9 ]
const arr2=myArr.splice(1,3);
console.log("arr2 ",arr2);//[ 1, 2, 3]
console.log(" after splice myarr",myArr); //[ 0, 4, 5, 9 ]






