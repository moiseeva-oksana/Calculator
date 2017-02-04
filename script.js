"use strict";
var num=[];
var str = "";
var operation;
function getNum(val) {
    str=str+val;
    document.getElementById('str').innerHTML = str;
}
function changeSign() {
    str = str*(-1);
    document.getElementById('str').innerHTML = str;
}
function result() {
    var number=+str;
    num.push(number);
    var result;
   switch(operation) {
       case "+": result = sum();
           break;
       case "-": result = subtract();
           break;
       case "*": result = multiply();
           break;
       case "/": result = divide();
           break;
       case "1/x": result = inverse();
           break;
       case "^": result = pow();
           break;
       case "Sqrt": result = getSqrt();
   }
    document.getElementById('str').innerHTML = result;
    str="";
    num=[];
}

function setOperation(val) {
    operation = val;
    document.getElementById('str').innerHTML = operation;
    var number=+str;
    num.push(number);
    str="";
}

function sum() {
    var result=0;
    for(var i=0; i<num.length; i++) {
        result+=num[i];
    }
    return result;
}

function subtract() {
    var result=num[0];
    for(var i=1; i<num.length; i++) {
        result-=num[i];
    }
    return result;
}

function multiply() {
    var result=1;
    for(var i=0; i<num.length; i++) {
        result*=num[i];
    }
    return result;
}

function divide() {
    var result=num[0];
    for(var i=1; i<num.length; i++) {
        result/=num[i];
    }
    return result;
}
function inverse() {
    return 1/num[0];
}
function pow() {
    var base = Math.abs(num[0]);
    var power = num[1];
    var result=1;
    while (power) {
        if (power & 1)
            result *= base;
        base *= base;
        power >>= 1;
    }
    if(num[0]<0 && num[1]%2==1) {
        result*=-1;
    }
    return result;
}
function backspace() {
    str = str.substring(0, str.length-1);
    document.getElementById('str').innerHTML = str;
}
function clearNum() {
    str = "";
    document.getElementById('str').innerHTML = str;
}
function getSqrt() {
    return Math.sqrt(num[0]);
}

