// const tinderUser =new Object() =>declarartion of object
const tinderUser ={} // =>declarartion of object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularuser ={
    email:"someone@gamil.com",
    fullname :{
        userfullname :{
            firstname:"anushka",
            lastname:"talari"
        }
    }
}
// console.log(regularuser.fullname.userfullname)
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2,obj4) // object .assign(target, source) static method copies all enumerable own properties from one  or more source to a target object . 
// It returns the modified target object

// const obj3 ={...obj1,...obj2}

// const users ={

// }
// console.log(obj3)

const users =[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]
// console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));