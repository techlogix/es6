
'use strict'
/**
 * call once
 * @param {} data 
 */
let firstData;
let loadedFirst=0;
let firstStep=(data)=>{
   return new Promise(function(resolve,reject){
    if(loadedFirst===1) {
        //console.log('Skip first')
        resolve(firstData)
    }
    else{
    console.log("First Step "+data.name)
    firstData={"name":"Rohit Sood"}
    loadedFirst=1
    resolve(firstData)
    }
        
   });
}

/**Call this and the next step repeatedly */
let secondStep=(data)=>{
    return new Promise(function(resolve,reject){
     if(true) {
         console.log("Second Step "+data.name)
         resolve(data)
     }
    });
 }

 let thirdStep=(data)=>{
    return new Promise(function(resolve,reject){
     if(true) {
         console.log("Third Step "+data.name)
         resolve(data)
     }
    });
 }

setInterval(()=>{Promise.resolve({'name':'Rohit'}).then(firstStep).then(secondStep).then(thirdStep)},2000)
//Promise.resolve({'name':'Rohit'}).then(firstStep).then(secondStep).then(thirdStep)
//Promise.resolve(data).then(secondStep)
