// ES5

// declaration 
var variableOne;
// --------------------------------------------------------------------------
// initialization
var variableTwo = "HELLO WORLD";
// --------------------------------------------------------------------------
// assignment
variableOne = 1337;
// --------------------------------------------------------------------------
// console output (scanf)
console.log('variable 1 => ' +  variableOne + '\nvariable 2 => ' + variableTwo);
// --------------------------------------------------------------------------

// if-else, for, while, do while, switch all work he same as 'C'
var x = 2;
var y = 1;
if (x > y) {
    console.log(x + ' is greater than ' + y);
}
else {
    console.log(y + ' is greater than' + x);    
}
// --------------------------------------------------------------------------

var i;
for (i=0; i<5; i++) {
    console.log('i => '+ i);
}

// --------------------------------------------------------------------------

while(x>=y) {
    console.log(x + ' is greater than ' +  y + ' but not for long!');
    y++;
}

