// 1. Create two files named f1.js and Float32Array.js using the 'touch' command.
// 2. Send the object below to the function imported from f1.js which displays the fruits
// 3. Also, send the same object to the function imported from f2.js which displays the vegetables
// 4. Both functions in f1 and f2 should console.log(obj.fruits) and console.log(obj.vegetables) respectively.

var obj = {
    fruits: ["apples", "oranges", "grapes"],
    vegetables: ["onions", "tomatos"]
}

// var f1 = require(.......)
// f1(obj)
// same for f2