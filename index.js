// Array declaration
var arr = [];

// Initiliazation
var arr1 = [1,2,3,4,5];

var arr2 = [1, 'c', 'STRING', 1.1]; // No data-type barriers

// Displaying an array using console.log()
console.log(arr2);

// Array traversal is the same as C using a for loop
var i;
for (i=0; i<arr2.length; i++) { // arr2.length gives the length of the array.
    console.log(arr2[i]);
}

/**
 * Arrays can be inherently used as stacks. 
 * So, push() and pop() are default built in functions on arrays
 */

var arr = [1,2,3,4,5];
console.log('\nArray initialized =>', arr);

arr.push(100);
console.log('\nPushed 100. Array now is =>', arr);

arr.pop();
console.log('\nPopped the last element. Array now is =>', arr);

