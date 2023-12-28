const user={
    username:"bhakti",
    price:999,
    welcomMessage:function(){
        console.log(this);
        console.log(`${this.username} ,welcome to website`);
    }
}


user.welcomMessage(); //bhakti ,welcome to website
user.username="sam";
user.welcomMessage(); //sam ,welcome to website
console.log(this);

// function chai(){
//     let myName="bhakti";
//     //console.log(this);
//     console.log(this.myName); //cant access function varable using  this within function
                                //undefined 
//}
// chai();

const chai=()=>{
    let myName="bhakti";
    console.log(this); //{}
 
}


const add=(num1,num2)=> (num1+num2);
const example=()=>({username:"sharmaji"});
console.log(add(2,9));
console.log(example());

