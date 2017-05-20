'use strict';
/**
 * ES6 introduces symbols are a primitive type - joining strings, numbers, Booleans, null and undefined.
 * You can create a symbol using the global Symbol function. 
 */

let firstName = Symbol("first name");
let lastName = Symbol("last name");
let person = {};//property Object

person[firstName, lastName] ="Nikhil";//assign a new property on the person object

console.log(person[firstName]);
console.log(firstName);
