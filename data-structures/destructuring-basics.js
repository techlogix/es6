'use script';
/**
 * objects and arrays are main data structures
 */

let location={
    _type:"Parking Garage",
    _name:"Dennison Indy",
    combo:()=>{_type+"+"+_name}
};


let _type="PG",_name="DP_LLC";
console.log(_type);
console.log(_name);

//let {_type, _name}= location;//unsafe if variables are already declated. Instead use () or even a function

/**
 * Defintions in params is safe - it will not error out as duplicate defintions.
 
( 
    {_type,_name} = location
);//creates a variable type and name - populates it from location object's named variables
*/
outputValue({_type,_name}=location);//this works to destructure and assign

function outputValue(value){console.log(value._name);}
console.log(_type);
console.log(_name);

//Nested Object Destructuring

let Person=
{
    first_name:"Rohit",
    last_name:"Sood",
    address:{
        line_1:"990 Foxfire Cir",
        line_2:"",
        city:"Carmel",
        state:"IN",
        zip:"46032"
    },
    dob:new Date("1976-01-01")
}

/**
 * localState is the new variable assigned to state.
 */
let {address:{state:localState}} = Person;
//console.log(address);//ReferenceError: address is not defined
console.log(localState);

let colors = ["red","green","blue"];

let[,,thirdColor]=colors;

console.log(thirdColor);//blue


/**
 * Swap variables without a third 'tmp' variable.
 */

let a=1, b=2;

[a,b]=[b,a];

console.log("a="+a+"\nb="+b);

/**
 * Default values
 */

let days=["Monday",["Tuesday","Tue AM","Tue PM"]];
let [firstDay="Sunday",[secondDay], thirdDay="Wednesday"]=days;

console.log(firstDay+" "+secondDay+" "+thirdDay);//Monday, Tuesday, Wednesday

/**
 * Default values for destrucuting parameters.
 * Missing arguements that evaluate to undefined causes errors - so defaulting expected values is a good practice
 */

function setCookie(name, value, { secure=false, path="/", domain="digitaldivvy.com", expires=new Date(Date.now()+360000000)}={})
{
    console.log(secure+" "+path+" "+domain+" "+expires  );
}
let options={secure:true, domain:"rohitsood.com"};
setCookie("visitor-name","sood", options);