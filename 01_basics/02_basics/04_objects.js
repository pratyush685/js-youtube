const tinder = new Object()       //singleton object
const tinderUser = {}             // non-singleton object

console.log(tinder);   //empty object


tinderUser.ID = "1234abc"
tinderUser.name = "Meww"
tinderUser.islogIn = false

console.log(tinderUser);

const RegularUser = {
    email: "bunny@gmail.com" ,
    fullname: {
        userfullname: {
            firstname: "Bunny",
            lastname: "PAndey"
        }

    }
}


console.log(RegularUser);
console.log(RegularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "v", 4: "d"}

// const obj3 = {obj1, obj2}      // output-{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'v', '4': 'd' } }       M-1

// const obj3 = Object.assign({} ,obj1 , obj2)      //p\output={ '1': 'a', '2': 'b', '3': 'v', '4': 'd' }        M-2

const obj3 = {...obj1, ...obj2}     //spread operator{ '1': 'a', '2': 'b', '3': 'v', '4': 'd' }                  M-3
console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogIn'));

const user = [
    {
        id: 1,
        email: "okay@gmail.com"
    }
    {
        id: 2,
        email: hey@gmail.com
    }

]



