// Functions as variables

var fun1 = function (parameters) {
    var value = parameters;
    return value;
}

var returnedValue = fun1("Arguments");

// console.log(returnedValue);

// Passing functions as parameters to other functions

var fun1 = function (param) {
    console.log("This is fun1. And you passed: " + param);
}

var fun2 = function (param) {
    console.log("This is fun2. And you passed: " + param);
}

var mainFun = function (f1, f2) {
    f1("apples");
    f2("oranges");
}

mainFun(fun1, fun2);