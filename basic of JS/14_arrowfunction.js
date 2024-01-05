
//this operetor discussion which refer to current context
//in node enviourment 'this' refer to {} i.e empty object
//in window enviourment 'this' refer to window object

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


//arrow function discussion 

// function chai(){
//     let myName="bhakti";
//     //console.log(this);
//     console.log(this.myName); //cant access function varible using  this within function
                                //undefined 
//}
// chai();

const chai=()=>{
    let myName="bhakti";
    console.log(this); //{}
 
}

const add=(num1,num2)=> (num1+num2);
const example=()=>({username:"sharmaji"}); //returning object
console.log(add(2,9));
console.log(example());

