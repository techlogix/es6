'use strict';
/**
 * for loops are old school and wasteful/
 * I've written then commented out functionally correct but not the ideal way.
 * Note: yeild is like a return statement. It cannot cross functional boundaries.
 * GENERATOR: a special function that returns an iterator.
 */
function *daysOfWeek(){
    const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for (let n of days){
        yield n;
    }
}

let days=daysOfWeek();// Iterator.


while(days)//also check for iterators not being null;
{
    let day=days.next();
    if(day.value === undefined) break;
    console.log(day.value);
    
}
