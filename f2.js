// We can also export functions as variables to be called in other files

var functionToBeExported = function (args) {
    // log all the arguments passed to the function
    console.log(args);
}
module.exports = functionToBeExported;