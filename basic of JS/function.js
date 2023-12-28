
function addTwoNumbers(num1,num2)
{
    return num1+num2;
}

console.log(addTwoNumbers(2,3));

//function loginMessage(username)
function loginMessage(username="sam")//if you want to give default value
{
    //if(username===undefined) or
    if(!username)
    {
        console.log("plz enter username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginMessage());
console.log(loginMessage("BHakti"));


// ... is called rest operator
function calculateCartPrice1(...num1){
    return num1;
}

console.log(calculateCartPrice1(9,5,6,7)); //[ 9, 5, 6,7 ]

function calculateCartPrice2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice2(9,5,6,7)); //[ 6, 7 ]

const user={
    username:"bhakti",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username:"Sharma",
    price:999
    });

const myArr=[200,300,800];

function returnArrElement(getArray){
    return getArray[1];
}

console.log(returnArrElement(myArr));