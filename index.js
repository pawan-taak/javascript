// document.write("Hey i am here")
// console.log("hi sakshi ")

// var a=10;
// var name="sakshi"


// {
//     var name="Sunita"
//     console.log("my name is ",name)

// }


// console.log("my name is ",name,)

// let age=20;
// age=40
// {
//     let age=30;
// console.log(age);


// }
// console.log(age);


// const b=40;
// b=30;
// console.log(b);


/** Data types */
let a = "sakshi"
let b = 89
let c = false
let d

console.log(typeof d);

let obj = {
    name: "sakshi",
    age: 24,
    status: true
}

let arr = ["dgfjhgd", 23, true, {}, []]


let age = "23.5"
age = Number(age)
// age=parseInt(age)
// age=parseFloat(age)
console.log(typeof age, age);

/**
 * Operators
 * 1. Arithmetic Operator
 *      +,-,*,/,%,**,++
 */

// let x=2;
// let y=3;

// let z=x**y
// let num=x--
// console.log(num,x,"increment");
// console.log(z,"Sum of two number is ")

/**
 * Assignmewnt Operator
 * +=,-=,*=,/=,%= 
 */

let x = 10;
let y = 20;
// x+=y
// x=x+y
y += x

console.log(x, y);
/**
 * commparison operator
 * >,<,<=,>=,==
 */

x = 50;
y = 50;

// console.log(x===y);
// console.log(x!=y);

// let res= x<=50 && y>=50

let res = x <= 40 || y != 50

console.log(res);

// console.log(res);

let status = true

console.log(!status);


const xyz = 40;
{
    const xyz = 50
    console.log(xyz);
}
console.log(xyz);

/**
 * conditional statements
 * 
 */

// x= prompt("enter a number")

if (x > 0) {
    alert("Number is +ve")
}
else if (x == 0) {
    alert("Number is zero")
}
else {
    alert("Number is -ve")
}

// console.log(x);
// // alert("Alert!! Battery Low")
// confirm("Are you Sure")

age = 18;
let country = "India"
if (country === "India") {
    if (age == 18) {
        alert("You are elligible")
    }
    else {
        alert("you are under age")
    }
}
else {
    alert("You are not elligible for driving")
}


/**
 * 1.  number is even or odd
 * 2.  person elligible for vote or not
 * 3. number is +ve , or -ve or 0
 * 4. check value is number or not
 * 5. leap year or not
 * 
 */

/**
 * if(){
 * }
 * 
 * if-else
*  if(){
         }
else{
     }
 */
/**
 * ladder if
 * if(){
 * }
 * else if(){
 * }
 * else{
 * }
 */

/**nested if
 * 
 * if(){
 * if(){
 * }else{
 * }
 * }
 * else{
 * }
 * 
 * 
 */