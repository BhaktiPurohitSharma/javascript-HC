//you can declare object two ways
//litrate way and constructor way(object.create)
//when it declare as constructor way it behaves as singleton

//object literals
const mySym=Symbol("key1");

const JsUser={
    name:"bhakti",
    "company":"abc",
    age:30,
    lang:"java",
    post:"software developer",
    isLoggedIn:false,
    workingDays:["mon","tue","wed","thr","fri"],
    [mySym]:"key1", //datatype symbol
   // mySym:"key2" //datatype string
}

console.log(JsUser);

console.log(JsUser.lang); //java
console.log(JsUser["lang"]); //java //ideal way 
console.log(JsUser["company"]); //abc
console.log(JsUser[mySym]);

JsUser.company="xyz";
console.log(JsUser["company"]);//xyz
Object.freeze(JsUser); //to avoid overriding in object
JsUser.company="spc";
console.log(JsUser["company"]); //xyz



const JsUser2={
    name:"Bhakti",
    "company":"abc",
    age:30,
    lang:"java",
    post:"software developer",
    isLoggedIn:false,
    workingDays:["mon","tue","wed","thr","fri"],
    [mySym]:"key1"
}
JsUser2.greeting=function(){
    console.log("hello js user");
}



console.log(JsUser2.greeting); //[Function (anonymous)] 
                                
console.log(JsUser2.greeting()); // hello js user undefined

JsUser2.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`); 
}
console.log(JsUser2.greetingTwo()); //Hello js user, Bhakti
