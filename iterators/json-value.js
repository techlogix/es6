'use strict';
/**
 * Example that creates an Object that walks through a JSON - and spitting out name-values.
 */

let processor={

    *createNameIterator(data)
    {
        let values=JSON.parse(data);
        
        console.log(values);
        yield 3;
    }

};

let person={}
person.name="Rohit";
person.age="41";
person.city="Carmel";

console.log(person);
console.log(person=JSON.stringify(person));
console.log(JSON.parse(person));

processor.createNameIterator(person);