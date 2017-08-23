'use script';
/**
 * Make multiple asynch calls, wait for all results to come back.
 * https://medium.com/@faisalabid/7-tips-for-a-node-js-padawan-e7c0b0e5ce3c
 */
console.log('Async concentrate');

var async = require("async");
var express = require('express');
function getUserProfile(event, context){
    setTimeout(()=> {
        console.log('fetch user profile from db')
    }, 2000);
}

function getUserImage(event, context){
    return new Promise((resolve, reject)=>{
        console.log('fetch user image');
    },4000);
}

getUserProfile('event','context');
