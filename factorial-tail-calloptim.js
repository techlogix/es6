'use strict';
/**
 * Tail call unoptimized
 */

function factorial (n){
    if (n<1)
    {
        return 1;
    }
     return n*(factorial(n-1));
}

/**
 * Optimized stack
 * @param {*} n 
 * @param {*} p 
 */
function optimizedFactorial(n, p=1){
    if(n<=1){
        return 1*p;
    }
    else{
    let f=n*p;
    return optimizedFactorial(n-1, f);
    }
}

let result1=factorial(5);
console.log(result1);
let result2=optimizedFactorial(5);
console.log(result2);