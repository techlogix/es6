'use strict';
/**
 * for loops are old school and wasteful/
 * 
 */
function *daysOfWeek(){
    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for(let a=0;a<days.length;a++){
        yield days[a];
    }
    //yield "Monday";
    //yield "Tuesday";
    //yield "Wednesday";
    //yield "Thursday";
    //yield "Friday";
    //yield "Saturday";
    //yield "Sunday";
    

}
let i=daysOfWeek();
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);

