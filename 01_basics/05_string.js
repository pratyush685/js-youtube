const name = "pratyush"
const clg = "  GGSIPU USAR"

console.log(name + clg);

console.log(`hello my name is ${name} my clg name is ${clg}`);


const gameName = new String('pubg')

console.log(gameName[1]) 
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3))
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,3)
console.log(anotherString);

const newStringOne = "   Pratyush.   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/hitesh%20choudhary/js-hindi-youtube"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.split('-'));
console.log(gameName.bold());
console.log(gameName.fixed());

console.log(gameName.blink());
