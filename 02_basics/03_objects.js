//singleton
// constructor using

// object literals
 const mySym =Symbol("key1")
const JsUser={
    name : "anushka",
    "full name":"Anushka Talari",
    [mySym]:"mykey1",
    age :18,
    location:"vijaywada",
    email :"anushka25@gamil.com",
    isLoggedIn :false,
    lastLoginDays :["Monday","sunday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser.mySym))
JsUser.email ="anus@gmail.com"
// Object.freeze(JsUser)// after freezing values acn,t be propoagte  if you do any changes
JsUser.email ="anu@chatgpt.com"
// console.log(JsUser)
 JsUser.greeting= function(){
    console.log("Hello Anuhska");
 }
 JsUser.greetingTwo= function(){
    console.log(`Hello Anuhska,${this.name}`);
 }
//  console.log(JsUser.greeting)
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

