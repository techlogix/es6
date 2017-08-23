'use strict';

class PersonClass{
    constructor(name){//special function
        this.name=name;
    }
    greet(greeting){
        console.log(greeting+","+this.name);
    }
}
let person=new PersonClass('Nik');
person.greet('Good morning');

console.log(person instanceof Object);//true
console.log(person instanceof PersonClass);//true
console.log(typeof person);
console.log(typeof PersonClass);//function; wait what? internal represntation is a function
console.log(typeof PersonClass.prototype.greet);//function
console.log(typeof PersonClass.sayName);//undefined


/**
 * Following Code is without the class construct
 * 
 */

let PersonType = (
    function(){
        'use strict';

      const PersonType2= function(name){
          if(typeof new.target === 'undefined'){
              throw new Error('Constructor must be called with new.');
          }
          this.name=name;
      } 
      //define a property which has the 'value' of function
      Object.defineProperty(PersonType2.prototype, "greet",{
          value:function(greeting){
              if(typeof new.target!== 'undefined'){
                  throw new Error('Method cannot be called with new.');
              }
              console.log(greeting+","+this.name);
          }, enumerable:false, writable:true, configurable:true
      });
      return PersonType2;
    }
)();

let persont=new PersonType('Ani');
persont.greet('Good morning');