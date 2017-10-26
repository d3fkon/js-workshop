// Functions!

/*
    1. The 'function' keyword is used before declaring functions.
    2. No return type specifiers are needed.
    3. Parameters can be of any type. No need of specifing the type.
    4. All parameters are "PASSED BY VALUE" unless and object is used.
    5. The function may or may not have a return value. 
*/
function functionName (parameters) {
    // ...
    var value = parameters;
    return value;
}

var returnedValue = functionName(2);

console.log(returnedValue);


// example functions

function multiply2 (number) {
    return number * 2;
}

console.log(multiply2(20));