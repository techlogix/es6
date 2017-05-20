//tests on ecma script 6
//ES6
/**
 * no this, super, arguements and new.target bindings
 * Cannot be called with new
 * No prototype
 * Cant' change this
 * No arguements object
 * No duplicate named parameter (allowed in regular functions in non-strict)
 */
'use strict';
var printBacon_old=function(){
    console.log("Old bacon");
}

var printBacon=()=> console.log("Bacon is healthy!");

let addition=(a,b) => console.log(a+b);
let multiply=(a,b) => console.log(a*b);
let divide=(a,b)=> console.log(a/b);


//this will immediately call the function.
printBacon();

addition(5,6);

multiply(5,6);
//this will invoke the function after the timeout
setTimeout(printBacon,1000);

//Tail call optimization
/**
 * Avoid access to variables in current stack frame.
 * No calculations after tail call returns
 * Return the function value as the return of the stack frame
 */