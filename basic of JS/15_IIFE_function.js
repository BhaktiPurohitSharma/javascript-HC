//Immediatly invoked function expressio(IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

//IIFE (defination)(invoke)
//it demands semicolon compulsary

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

//unamed iife
( ()=>console.log(`DB CONNECTED...`)  ) ();

( (name)=>console.log(`My Name is ${name}`)  ) ("bhakti");

