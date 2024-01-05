const accountId=14256;
let accountEmail="abc@gmail.com";
var accountPassword="12345";
accountCity="jaipur";
let accountState; //undefined value if not declared
//accountId=123; //Assignment to constant variable. error
accountEmail="h@ll.com";
accountPassword="ss";
accountCity="parbhani";
//prefred not use var because of issue in block and function scope

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountPassword,accountState]);