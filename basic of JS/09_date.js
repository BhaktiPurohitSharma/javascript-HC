let myDate=new Date();
console.log(myDate);//2023-07-15T17:00:58.566Z
console.log(myDate.toString()); //Sat Jul 15 2023 22:30:58 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sat Jul 15 2023
console.log(myDate.toLocaleDateString()); //15/7/2023
console.log(myDate.getDate()); //15
console.log(myDate.toLocaleString()); //15/7/2023, 10:30:58 pm

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let myCreatedDate1=new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString()); //23/1/2023, 5:03:00 am

let myCreatedDate2=new Date("01-14-2023");
console.log(myCreatedDate2.toLocaleString()); //14/1/2023, 12:00:00 am


let myTimeStamp = Date.now();
console.log(myTimeStamp); //1689440934085 in miliseconds
console.log(Math.floor(Date.now()/1000));//1689441075 in seconds

let newDate=new Date();
console.log(newDate.getMonth()+1); //to get recent month
console.log(newDate.getDay());//day of week

// '${newDate.getDay()} and time is'

console.log(newDate.toLocaleString('default',{
    weekday:"long"
    }));
console.log(parseInt("123Hello"));
console.log(parseInt("Hello123"));