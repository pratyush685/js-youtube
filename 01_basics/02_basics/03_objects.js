//Singleton
//object.create

//Object.literals

const mysym = Symbol("key1")
const JSUser = {
    name: "Piyush",
    "full name": "piyush Tripathi",
    [mysym] : "mykey1",
    age: 19,
    city: "Delhi",
    IsLoggesIn: false,
    lastLoggingdays: ["Monday","Tuesday"]
}

console.log(JSUser.age);
console.log(JSUser[" full name"]);
console.log([mysym]);

JSUser.city = "kol"      //channge value
console.log(JSUser.city);

Object.freeze(JSUser)      //freeeeze it for further updates
JSUser.age = 67
console.log(JSUser);
