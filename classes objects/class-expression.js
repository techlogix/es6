'use strict';
/**
 * Anonymous class expression
 * @param {*} name 
 */
let PersonClass= class{
    constructor(name){
        this.name=name;
    }

    sayHello(){
        console.log('Hello '+this.name);
    };
};

let person = new PersonClass('Rohit');
person.sayHello();

console.log(typeof PersonClass);//function
console.log(person instanceof Object);//true

/**
 * Class expressions
 */

 let PersonClazz = class PersonClass2{
     constructor(name){
         this.name = name;
     }
 }
