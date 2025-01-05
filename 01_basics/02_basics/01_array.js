//array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["Shaktiman", "Batman", "ironman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


//Array methods


// myArr.push(6)
// myArr.push(7)
// myArr.pop()  // remove last value

// myArr.unshift(9)    //add this value at the beggiening

// myArr.shift()          //removes the starting value
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(8));

// const newArr = myArr.join()    //join convert array to string 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// splice & splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log( "C", myArr)

console.log(myn2);
