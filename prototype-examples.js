'use strict';

// A friend is defined as anyone that can greet - but in different ways
/**
 * Object.getPrototypeOf() method ensures the correct prototype is called and then an additional string is appended to the output.
 * ECMAScript 6 - had a formal method defintion
 */
let friend={
    getGreeting(){
        return Object.getPrototypeOf(this).getGreeting.call(this)+", hi!";
    }
}

// More specific "types" of possible friends
let person = {
    getGreeting(){return "Hello";}
}

let dog={
    getGreeting(){return "Woof";}
}

//set friend to a person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());// "Hello, hi!"
console.log(Object.getPrototypeOf(friend)===person);//true

//set prototype to a dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());// "Hello, hi!"
console.log(Object.getPrototypeOf(friend)===person);//false
console.log(Object.getPrototypeOf(friend)===dog);//false


let friend2={
    getGreeting(){
        super.getGreeting()+", hello!";
    }
}

Object.setPrototypeOf(friend2, person);
let relative = Object.create(friend2);
console.log(relative.getGreeting());//undefined