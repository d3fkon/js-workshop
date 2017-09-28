// Mixed String concatination

var num1 = 1;
var num2 = 2;
var num3 = num1 + num2;

var str1 = 'Sample String ';

var str2 = str1 + num1; // Concatinating a string with a number

var str4 = num1.toString() + num2.toString() // Converting a number into a string and concatinating

var num4 = parseInt(str4) + 100; // Parsing the numbers out of a string


// Output

console.log('num1 = ' + num1 + ', num2 = ' + num2 + ', num3 = ' + num3)
console.log('str2 => ' + str2);
console.log('str4 number.toString() method => ' + str4);
console.log('num4 parseInt => ' + num4);