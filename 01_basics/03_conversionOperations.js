let score = undefined

// console.log(typeof score);
// console.log(typeof(score)); means the same thing as line above, this is a method, written inside ()

let valueInNumber = Number(score) //when we convert a value in another type we have to write the typen name starting with Capital

// console.log(valueInNumber);

// NaN means not a number
// when we forefully convert 33abc to number and print the vlue of it 
// then it prnts NaN
// true will be converted in 1 and false in 0
// null in 0
// undefined in NaN

let isLoggedIn = "Anwesa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);



//  Operations //



let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2**3) // it means 2 to the power 3

let str1 = "hello"
let str2 = " Anwesa"
let str3 = str1 + str2
//console.log(str3); // Result Hello Anwesa


// if you write ("1" + 2 + 2) then the result is 122 but if you write (1 + 2 + "2") answer is 32 cuz "operation precedence"
// if string is written first then everything is counted as string but if number is written first then number operations are done then the remaining string is placed right behind;
// if you write (+true) the answer is 1 as "+" converts it in a number and true's value is 1
// (+"") = 0 as empty string is converted to 0 

let gameCounter = 100
++gameCounter
console.log(gameCounter)

// read about pre-increment and post-increment
// preincreament is when the vlue is assigned first then the incrementation happens
// post is when incrementation happens first then value is assigned

// ****************** Example of pre and post increment
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"



// The syntax `${x}` is part of **template literals** in JavaScript, introduced in ES6. It allows you to embed variables or expressions inside strings using the `${}` syntax. 

// - **Template literals** are enclosed by backticks (`` ` ``)
// - Anything inside `${}` is evaluated as JavaScript code, and its result is inserted into the string.

// ### Code Explanation:
// let x = 3;
// const y = x++; 
// console.log(`x:${x}, y:${y}`); 
// Output: "x:4, y:3"

// - `x++`: Post-increment. The value of `x` is used **before** it is incremented
// - `${x}`: Dynamically embeds the current value of `x` into the template literal.

// ### Template Literal Example:
// const name = "Alice";
// const age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);
// // Output: "My name is Alice and I am 30 years old."