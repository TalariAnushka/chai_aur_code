//primitive datatype

//7 types : String ,Number , Boolean , null=>(empty), undefined, symbol,
// BigInt


// const score =100
// const scoreValue  =100.3
//  const isLoggedIn =false
//  const outsideTemp=null
//  let userEmail;
//  const id =Symbol('123')
//  const anotherId =Symbol('123')
// console.log(id===anotherId)
const bigNumber = 345668899999532478n;


// reference (non-primitive)
//Arrays, Objects, Functions


//arrays
const heros =["shaktiman","naagraj","doga"]
//objects
 let myObj ={
    name :"hitesh",
    age:22,  
}
//functions
const myFunction =  function(){
    console.log("Hello World");
}
console.log(myFunction)
console.log(typeof(bigNumber))

// type of operator results
// undefined = undefined
// null = object
//  boolean = boolean
// number = number
// string = string
 //object = object




//Exploring JavaScript's Basic Data Types:

// JavaScript has seven primitive data types: String, Number, Boolean, null, undefined, symbol, and BigInt. Here's a quick snapshot to help you understand each one:

// - `String`: Used for text, for example: `"Hello, World!"`.
// - `Number`: For numeric values, e.g., `100` or `100.3`.
// - `Boolean`: Represents truth values, `true` or `false`.
// - `null`: To represent an intentional absence of any object value, i.e., `null` (empty).
// - `undefined`: Represents a variable that has been declared but not assigned a value.
// - `symbol`: A unique and immutable data type, often used to identify object properties, such as `Symbol('123')`.
// - `BigInt`: For large integers.

// stack, heap
 // stack - primitive type- you get copy
 //heap - non primitive- reference of  the original
 //let myYoutubename = "anushka";
// let  anothername =myYoutubename
// anothername = "chaiaurcode"
// console.log(myYoutubename)
// console.log(anothername)

let userOne ={
    email :"user@google.com",
     upi :"user@ybl"
}
 let userTwo =userOne
  userTwo.email ="anushka@gmail.com"
  console.log(userOne.email)
  console.log(userTwo.email)
