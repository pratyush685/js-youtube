let score = "33"   //by using " "-->num is converted to string 


console.log(typeof score ); 
console.log(typeof (score));

let valueInNumber = Number (score )
console.log( valueInNumber);


//"33"-->33
//true->1; false->0
//"33abc"-->NaN

let IsLoggedIn = 1
let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn);

//1->true; 0->false
//""->false
//"okay"->true

let somenumber = 33

let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);


//*******************************.  Operation  *************************************************//

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "hey"
let str2 = " piyush" 

console.log(str1+str2);

console.log("1"  + 2);
console.log(1 + "2");
console.log(1 + "2" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");  // adding of the number followed by 2 as string 


console.log(+true); // o/p=>1
console.log(+"");  // o/p=>0

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter++;  //postfix
++gamecounter  //prefix

console.log(gamecounter);








