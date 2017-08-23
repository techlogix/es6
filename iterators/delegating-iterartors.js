'use strict';

function *createDaysOfWeekIterator(includeWeekends){

    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    if(includeWeekends)
    {
        console.log("all days");
        for(let day of days)
        {
            yield day;
        }
    }
    
    else 
    {
        console.log("weekdays only");
        
        for(let i=1; i < days.length-1; i++){
            yield days[i];
        }
    }

}

function *createTimeOfDayIterator(){

    let timeOfDay=["Morning","Afternoon","Evening","Night"];
    for (let t of timeOfDay){
        yield t;
    }
}

function *createTimeSlotIterator(){
    yield *createDaysOfWeekIterator();
    yield *createTimeOfDayIterator();
}

// test
let daysIterator=createDaysOfWeekIterator(false);
while(daysIterator){
    let day=daysIterator.next();
    if(day.value===undefined) break;
    console.log(day.value);
}

let timeSlotIterator=createTimeSlotIterator();
while(timeSlotIterator){
    let x=timeSlotIterator.next();
    if(x.value=== undefined) break;
    console.log(x);
}

