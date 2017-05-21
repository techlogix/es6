/**
 * Basic demonstration of async callback
 */

function placeAnOrder(orderNumber)
{
  console.log("Placed order:", orderNumber);
    cookAndDeliverFood(function(){
        console.log("Delivered  order: "+orderNumber+" in ");
                });

}

//simulate a 5 second operation

function cookAndDeliverFood(callback){
  var time=1000*Math.random();
  setTimeout(callback,time);
  console.log(time+" ms");
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
