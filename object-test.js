var Name= function(firstname, lastname){

console.log("Name is "+firstname+" "+lastname);
console.log(this===global);
}

Name('Rohit','Sood');
