'use strict';

class Shape{
    constructor(l,w){
        console.log(new.target===Square);//true
        this.length=l;
        this.width=w;
    }
    getArea(){
        return this.length*this.width;
    }
}

class Square extends Shape{
    constructor(l){
        super(l,l);
    }
}

let sq=new Square(4);
console.log(sq.getArea());