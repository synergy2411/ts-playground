
// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the operation");
//     }, 3000);
// }

// function webRequest(req){
//     console.log("Starting the operation with #",req.id)
//     longRunningOperation();
//     console.log("Ending the operation with #",req.id)
// }

// webRequest({id : 1});
// console.log("After Web request");

// Output : 1
// starting with 1
// after 3 sec .... running the operation
// ending with 1

// Output : 2
// starting with 1
// ending with 1
// after 3 sec .... running the operation

// Callback , promises, async...await, observables




var x = "Some string";

console.log(typeof x);

x = true;

console.log(typeof x);

x = 123;

console.log(typeof x);