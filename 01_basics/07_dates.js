let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// let mycreatedDate = new Date(2024,0,15)
// console.log(mycreatedDate.toString());

let mycreatedDate = new Date(2024,0,15,4,3)
console.log(mycreatedDate);

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime());  //t compare the time & convert to seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +  1 );
console.log(newDate.getDay());

// properties can be showm by control+space

newDate.toLocaleString('default',{
    weekday:"long"
})