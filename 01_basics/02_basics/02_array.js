const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman" ]


// marvel_heros.push(dc_heros)    //add the array in the array
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

let all_new_heros = [...marvel_heros, ...dc_heros]   //alternate option of concat

console.log( all_new_heros);


const another_array = [1, 2, 3, [2, 5, 6 ], 5, [9, 0, [4,6,7,[4,5,6,]]] ,6 ]

const real_array = another_array.flat(Infinity)
console.log(real_array);





console.log(Array.isArray("piyush"));
console.log(Array.from("piyush"));

console.log(Array.from({name: "piyush"}));    //interesting case for interview


let score1 = 200
let score2 = 400
let score3 = 500

console.log(Array.of(score1,score2, score3));


//leran more about -is,of,from