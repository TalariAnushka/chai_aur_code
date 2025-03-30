const marvel_heros =["thor","tronman","spiderman"]
const dc_heros =["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

//spread type to concate to ararys
// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//returns a new rray with all sub_array elements concatenated into it recursively up to the specified depth
console.log(real_another_array)

console.log(Array.isArray("Anushka"))// it gives true or false if it is an array it gives true if not it give s false

console.log(Array.from("Anushka"))// it will turn into array
console.log(Array.from({name :"anushka"}))// gives => []

let score1 =100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));// coverts all values into an array