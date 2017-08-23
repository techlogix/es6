'use strict';
/**
 * First class citizen = passed into methods.
 */

function createObject(classDef){
    return new classDef();
}

let obj= createObject(
    class {
        sayHi(){
            console.log('Hello');
        }
    }
);

obj.sayHi();