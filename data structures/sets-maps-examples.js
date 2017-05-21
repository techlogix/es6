'use strict';

console.log('Sets and Maps examples');

let address=  new Map().set('city','Carmel').set('state','IN').set('country','US');


let history=new Set().add("Carmel, IN").add("Indianapolis, IN").add("Carmel, IN");

console.log(address.get('city'));
console.log(history.size+" has Carmel "+history.has("Carmel, IN"));//2

history.delete("Indianapolis, IN");
console.log(history.size+" has Indianapolis, IN "+history.has("Indianapolis, IN"));//1 false

history.clear();

console.log(history.size);

/**
 * de-dup arrays
 */
function deDup(items){
return [...new Set(items)];
}
console.log(deDup([1,2,2,2,3,4,5,5,5]));

/**
 * Weak Sets
 * Weak reference is held to the object value.
 */
let set = new Set(), wset=new WeakSet(), key={};

set.add(key);
console.log(set.has(key));//true
key = null;
console.log(set.has(key));//false
key=[...set][0];//only works with regular sets but will fail on weak sets


/**
 * You can use an object as a key
 */
let person = new Map(), key1={"fn":"firstname"},key2={"ln":"lastname"},key3="mn";
person.set(key1,"nik");
person.set(key3,"raj");
person.set(key2,"sood");
console.log(person.get(key1));//nik
console.log(person.get("mn"));//raj
console.log(person.get({"fn":"firstname"}));//undefined - because it's a different object (key)



