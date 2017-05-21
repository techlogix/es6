'use strict';

function User(){
  this.name="";
  this.life=100;
  this.giveLife=function giveLife(targetPlayer) {
    targetPlayer.life +=1;
    this.life -=1;
    console.log(this.name+" gave 1 life to "+targetPlayer.name);
  }
  this.showLife= function showLife()
  {
    console.log(this.name+" has "+this.life+" lives remaining");
  }
}

let Rohit = new User();
Rohit.name="Rohit";
let Tanya = new User();
Tanya.name="Tanya";


for (let i=0; i<10; i++)
{
  Rohit.giveLife(Tanya);
}

Rohit.showLife();
Tanya.showLife();

