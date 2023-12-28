

{
let a=10;
const b=20;
var c=30;
}

//console.log(a); //a is not defined
//console.log(b); //b is not defined
//console.log(c); //30

function one()
{
    const usernameOne="Bhakti";

    function two()
    {
        const websiteTwo="Website";
        console.log(usernameOne);
    }
    two();
}
one();


//create no problem
console.log(addOne(5));
function addOne(value){
    return value+1;
}


//here num is said to be expression
//console.log(addOne1(5)); //addOne1 is not defined
const num=function addOne1(value){
    return value+1;
}
//console.log(addOne1(5)); //addOne1 is not defined
console.log(num(9));

