

// primitive(call by value)  stack memory 
    // 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

    let name="abc";
    let age=18;
    let islog=false;
    let state;
    const id1=Symbol('123');
    const id2=Symbol('123');
    console.log(id1);
    console.log(id2);
    console.log(id1==id2);//false
    const bigNumber=299999999999999999999999n;


// non-primitive(call by Refrence) heap memory
    //Arrays,Object,Functions

    const heros=["shaktiman","nagraj","doga"];

    let myObj = {
        name:"bhakti",age: 22 }

    const myFunction=function(){
        console.log("Hello world");
    }


    console.log(typeof bigNumber);
    console.log(typeof heros);
    console.log(typeof myObj);
    console.log(typeof myFunction);