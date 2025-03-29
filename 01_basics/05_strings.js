const name = "anushka"
const repoCount =50
//console.log(name+repoCount+ "value");
// backticks `` string interpolation
//modern way syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('anushka')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));// gives the character of that letter
// console.log(gameName.indexOf('h')); .// gives the index of that letter

// const newString =gameName.substring(0,3)// three is not included here and negative values are not included
// console.log(newString);
// const anotherString =gameName.slice(-7,4)// in slice  negative values reverse  may start
// console.log(anotherString)
const newStringOne ="       anushka          "
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))//it will replace the 20 to -
console.log(url.includes('hitesh'))// if it is present it will giev true if not it will give false
console.log(gameName.split('-'))