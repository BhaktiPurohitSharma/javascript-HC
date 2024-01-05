//singleton

const tinderUser=new Object();

tinderUser.id="123abc";
tinderUser.name="Bhakti";
tinderUser.isLoggedIn=false;

console.log(tinderUser); //{ id: '123abc', name: 'Bhakti', isLoggedIn: false }

//storeing keys in array
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]

//storeing values in array
console.log(Object.values(tinderUser)); //[ '123abc', 'Bhakti', false ]

//storeing keys,values in array
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Bhakti' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true







const regularUser={
    email:"abc@gmail.com",
    fullname:{
        firstname:"Bhakti",
        lastname:"Sharma"
    }
}

console.log(regularUser.email); //abc@gmail.com
console.log(regularUser.fullname.firstname); //Bhakti

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};


// const obj3={obj1,obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3=Object.assign(obj1,obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//const obj3=Object.assign({},obj1,obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3={...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj3);

//array of object
const users=[
    {
        id:1,
        email:"array@gmail.com"
    },
    {
        firstname:"firstname",
        lastname:"lastname"
    }
];

console.log(users);
// output:
// [
//     { id: 1, email: 'array@gmail.com' },
//     { firstname: 'firstname', lastname: 'lastname' }
// ]

console.log(users[0]); //{ id: 1, email: 'array@gmail.com' }
console.log(users[1]); //{ firstname: 'firstname', lastname: 'lastname' }

console.log(users[0].email); //array@gmail.com
console.log(users[1].firstname); //firstname

