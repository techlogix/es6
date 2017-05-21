'use strict';
/**
 * for loops are old school and wasteful/
 * I've written then commented out functionally correct but not the ideal way.
 * Note: yeild is like a return statement. It cannot cross functional boundaries.
 */
function *daysOfWeek(){
    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    /**
     * The 'old school' way 
    for(let a=0;a<days.length;a++){
        yield days[a];
    }
     */
    for (let n of days){
        yield n;
    }
    /**
     * This is also valid functionally - but obviously not the way to do it.
     */
    //yield "Monday";
    //yield "Tuesday";
    //yield "Wednesday";
    //yield "Thursday";
    //yield "Friday";
    //yield "Saturday";
    //yield "Sunday";
    

}
let i=daysOfWeek();


/**
 * for loop - but prefer a while loop instead
for (;;){
    let v=i.next();
    if(v.value === undefined) break;
    console.log(v.value);
}
 */
while(true)
{
    let v=i.next();
    if(v.value === undefined) break;
    console.log(v.value);
}