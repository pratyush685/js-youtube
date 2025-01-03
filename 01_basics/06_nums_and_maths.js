const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());  //to covert number into string 
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //to give the pricision value

const othervalue = 123.897

console.log(othervalue.toPrecision(3))

const hundred = 1000000
console.log(hundred.toLocaleString());    //us standard
console.log(hundred.toLocaleString('en-IN'));     //indian sys

//********************************MATHS*************************************//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(6.9));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);  //for getting single digit value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min  + 1)) + min)



