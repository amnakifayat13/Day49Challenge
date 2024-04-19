// Create a function that accepts a callback and invokes it with some arguments.
function executeCallBack(callback, arg1, arg2) {
    callback(arg1, arg2); // invoke the function
}
// Example of callback the function
var add = function (a, b) {
    console.log(a + b);
};
executeCallBack(add, 5, 3);
