//  Primitive datAtypes


//  7 types : String, Number, Boolearn, null, undefined, Symbol (to make value unique ), BigInt(big value)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.log(score);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const Bignumber = 12349598585895n  //by adding n at the end number becomes Bignumber

console.log(Bignumber);

// Reference (Non primitive) datatype

// Array, Objects, Functions. ------>its datatype is object

const heroes = ["shaktiman","doga","flyingman"];
let myObj = {
    name: "piyush",
    age: 19,
    
}
const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);



// https://262.ecma-international.org/5.1/#sec-11.4.3



/*********************************************MEMORY**************************************************/
//1.Stack(takes copy value)=>it uses primitive Datatype
//  2.Heap(gives  reference of original value)=>it uses non primitive value 

let myName = "piyush"

let anotherName = myName
anotherName = "pratysh"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "okay@gmail.com",
    upi: "8888888@rapl",
}

let userTwo = userOne

userTwo.email = "google@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


