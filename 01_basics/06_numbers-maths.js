// const score = 400
// console.log(score)
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// const otherNumber =1123.9866
// console.log(otherNumber.toPrecision(3));
// const hundreds =1000000
// //console.log(hundreds.toLocaleString());// US standards  1,000,000

// console.log(hundreds.toLocaleString('en-IN'));// indian standards values money  10,00,00

// ++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math); //=> object
// console.log(Math.abs(4)) // negative converts to positive and positive doesn,t convert to negative
// console.log(Math.round(4.6)) // round value
// console.log(Math.ceil(4.2)) // bigger value => 5
// console.log(Math.floor(4.2)) // gives lowest value =>4
// console.log(Math.min(4,6,8,0));
// console.log(Math.max(4,6,8,0));
// console.log(Math.random()); //  gives random value between  from 0 to 1
// console.log((Math.random()*10)+1);
const  min =10
const max =20
 console.log(Math.random()*(max-min+1))
console.log(Math.floor(Math.random()*(max-min+1))+min)