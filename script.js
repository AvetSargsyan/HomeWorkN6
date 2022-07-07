"use strict";

//1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str ='ahb acb aeb aeeb adcb axeb'.match(/a[a-z]b/g);
console.log(str);

//2.Given the string '2 + 3 223 2223'. Write a regexp that finds line 2 + 3 without capturing the rest
let numStr = '2 + 3 223 2223';
const reg =  /2...3/;
console.log(numStr.match(reg));

//3.Get the day, month and year of the current date and output it to the console separately
const date = new Date();
const now = [date.getDate(),date.getMonth(),date.getFullYear()]
console.log(now);