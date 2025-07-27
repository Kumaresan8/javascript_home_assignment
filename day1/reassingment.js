//using var we can redeclare and reassign
var username="kumaresan";
var username="kumar";      //redeclaration

username="raja";//reassignment

console.log(username);

//using let we cannot redeclare but reassign
let AccBalance=20000;

//redeclaration is not allowed
AccBalance=50;//reassignment is allowed
console.log(AccBalance);

//using const we cannot redeclare and reassign
const username2=2345637;

//const username2="jiva";//redeclaration is not allowed
//username2=3;//reassignment is not allowed

console.log(username2);