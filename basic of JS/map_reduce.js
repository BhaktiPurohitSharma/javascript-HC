const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNumers.map( (num) => { return num + 10})
console.log("adding 10 in each element");
console.log(newNums2);


console.log("multiplying 10 then adding 1 then filter value greater than 40 arrayt");
const newNums3 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums3);

console.log("adding 1 then filter value less than equal to 5 arrayt");
//intial value
let i=0;
const total=myNumers.reduce(function (acc,currval) 
                                {
                                    console.log(`acc:${acc} and currval: ${currval}`);
                                    return acc+currval;
                                }
                            );
console.log(total);

console.log("adding 1 then filter value less than equal to 5 array n then adding");
const mytotal= myNumers
                .map( (num) => num + 1)
                .filter( (num) => num <= 5)
                .reduce((i,j)=>(i+j),0)
console.log(mytotal);           

const shoppingCart =[
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"Data Science course",
        price:3999
    }
];

priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0);

console.log(priceToPay);