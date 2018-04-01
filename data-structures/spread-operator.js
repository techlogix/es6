'use strict';

//let numbers = [1,2,3,4,5];
//The rest operator
function sumUp(...toAdd){
    let result=0;
    for (let i=0;i<toAdd.length; i++)
    {
        result +=toAdd[i];
    }
    return result;
}

let numbers = [1,2,3,4,5];
console.log(numbers);//array
console.log(...numbers);//spread
console.log(Math.max(...numbers));//spread operator makes

console.log(sumUp(1,2,3,4,5,"6"));//15+"6"=156


//shortened loops
console.log("Enter shortened loop");
for (let number of numbers)
{
    console.log(number);
}
console.log("Exit shortened loop");


//destructure arrays
console.log("Enter destructure arrays");
let [a,...c]=numbers;

console.log(a);
console.log(c);

console.log("Exit destructure arrays");

//swap with destructuring
console.log('Enter swap');
//let a=5; 
let b=10;
[b,a]=[a,b];
console.log(a);
console.log(b);
console.log('Exit swap');

//destructured arrays
let [x,y]=[1,2,3];
console.log(x,y);

//destructure with objects
let person={
name:'Sood',
yob:'1976',
age: ()=>{return (new Date().getFullYear())-person.yob}
};
let{name,age}=person;//note the curly for objects
console.log(name, age());