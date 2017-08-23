'use strict';

console.log('Built in iterators example');

// initialize
let colors=['red','green','blue'];
let fib=new Set([1,1,2,3,5,8]);
let process=new Map();
process.set(1,{'Open':'Site'});
process.set(2,{'Click':'Menu'});
process.set(3,{'Click': 'Preferences'});

// entries iterator
console.log('Example for entries()');
for(let color of colors.entries()){
    console.log(color);
}
// values() iterator
console.log('values()');

for (let proc_value of process.values())
{
    console.log(proc_value);
}

// keys() iterator
console.log('Example with keys()');

for (let proc_key of process.keys()){
    console.log(proc_key);
}