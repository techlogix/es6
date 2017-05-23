'use strict';

let Driver = {
    drivingDays:["MON","WED","THU"],
    drivingRating:88,
    drivingDaysIterator:function *(){
           for (let n of this.drivingDays){
        yield n;
    }
    }
};

let iterator =  Driver.drivingDaysIterator();

while(true)
{
    let item=iterator.next();
    if(item.value === undefined) break;
    console.log(item.value);
    
}