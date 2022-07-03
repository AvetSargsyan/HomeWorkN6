"use strict";

//1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str ='ahb acb aeb aeeb adcb axeb';
let mat = str.match(/a[a-z]b/g);
console.log(mat);

//2.Given the string '2 + 3 223 2223'. Write a regexp that finds line 2 + 3 without capturing the rest
let numStr = '2 + 3 223 2223';
let reg = /2...3/;
console.log(numStr.match(reg));
   // or using search()  
let numMat= numStr.search(/2.+.3/);
console.log("Position is " +numMat);

//3.Get the day, month and year of the current date and output it to the console separately
const now = new Date();
console.log(now.getDate() + ". " + now.getMonth() + ". " + now.getFullYear());