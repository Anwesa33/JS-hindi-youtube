"use strict"; // treat all JS Code as newer version of JS

//alert(3 + 3) // this is the wrong syntax for node js , we are not using browser here

let name = "Anwesa" //string datatype; written inside ""
let age = 27 // numberdataype
let isLoggedIn = false // boolean datatype true/false

//bigint is a datatype for numbers over 2^53
// null datatype; it is also a standalone value;
// undefined is also a value
// difference between value undefined and null is
// when i did'nt define a value at all it is undefined; but when i kept a value intentionally empty, like say if a server cannot return a certain request right now and returning 0 insead
// i would rather prefer null 
// symbol to make things unique


// object is another datatype

console.log(typeof null); // object
console.log(typeof undefined); //undefined

// two types of dataypes : primitive and non-primitive/reference

// primitive - 7 types - String, Number, Boolean, Null, Undefined, Symbol, Bigint
// non-primitive - 3 types - Arrays, Objects, Functions

// Symbol datatype

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //answer is false, symbol changes the value to be unsimilar to any other value;



