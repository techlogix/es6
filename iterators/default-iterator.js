'use strict';
let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let iterator=days[Symbol.iterator]();
while(true)
{
    let item=iterator.next();
    if(item.value === undefined) break;
    console.log(item.value);
    
}