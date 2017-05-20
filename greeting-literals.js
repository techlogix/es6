'use strict';

let name = 'Sood';
//time of day
let greeting = 'morning';
if((new Date()).getHours()>12){
    greeting='afternoon';
}
if((new Date()).getHours()>18){
    greeting='evening';
}


let description = `
Good ${greeting}
Hello my name is ${name}
`

console.log(description);