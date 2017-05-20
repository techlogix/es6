'use strict';

function makeRequest(url, ...args){

//if(5>3) throw new Error('Please check your URL');


    let timeout=(typeof args[0]=="undefined")?2000:args[0];
    let callback=(typeof args[1]=="undefined")?()=>{}:args[1];
    
    console.log(url, timeout, callback);

}

let tmp=function hitSite(){

    console.log('Hit it');
}
//makeRequest('google.com');
makeRequest('http://www.google.com',1000,tmp);

function add(first, second=first){//default or pass in
    return first+second;
}

console.log(add(1,1));
console.log(1);//major difference from java.

function Person(name){
    if(!typeof new.target === Person){
        throw new Error("Please use new Person()");
    }
    this.name=name;
}

let Nik=new Person("Nikhil");
//let Ani=Person("Ani");

/**
 * In this example a person is initialized as an object.
 */
let person = ((name) => {
//returns an object
    return {
        getName: function() {
            return name;
        },
        sayHello: () =>{
            return "Hello, "+name;
        }
    };

})("Sood");

console.log(person.sayHello());      // ""