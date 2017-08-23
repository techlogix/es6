'use strict';
//make this work!?

function *tasks(){
    let value=yield 1;
    console.log('value is '+value);
    value = yield value + 3;
    console.log('value is '+value);
}

function run(taskDef){
console.log('enter run');
  let taskIterator= taskDef();//create iterator
  console.log(taskIterator.done);//?? whyis this undefined
  //  console.log(task);
    
 let result= taskIterator.next();

    function step(){
        if(!result.done)
        {
            result=taskIterator.next(result.value);
            step();
        }
    }

}

    
run(tasks);