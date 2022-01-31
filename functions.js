// JAVASCRIPT FUNCTIONS.............
// A function is a block of organized, reusable code use to to perform a single, related action.

//Examples

//function greetings (name) {
    //console.log('Hello ' + name);

//}

//let name = 'Edward';

//greetings(name);

// Retuning value in a functions
//Example 1

//function greetings () {
    //return 'Hello Edward';

//}

//let message = greetings();

//console.log(message);

//Example 2

//function church () {
    //return 'The name of my church is Assemblies of God';

//}
//let churchName = church();
//console.log(churchName);

// Argument is a value that we pass to the function when we invoke it.
// A Parameter is a variable that we list as part of a function definition

//Examples

//function greetings (name1){
   // return 'I went to work yesterday with ' + '' + name1;
//}

// name1 = greetings('Micheal');

//name1 = greetings('Mary')

//console.log(name1);
// Another example

//function sum(sum1, sum2){
    //return sum1 + sum2;

//}

//let maths = sum(2, 3);

//console.log(maths)

//Note
//Variables decleared with the 'var' keyword or within function declearation DO NOT have block scope
//Examples 

//let message = 'Hello'
//if (message === 'Hello') {
   // let message = 'Inside the block';
   // console.log(message);
//}
//console.log(message);


//let message ='Hello';
//if (message === 'Hello') {
 //   var count = 100;
 //   console.log(count);
//}

//console.log(count);

// 'var' has no block scope. It's advisable to use 'let' variable to declare your scope instead of 'var'

//Immediately Invoked Function Expression (IIFE)
//Function Expression is define as a fuction and assign it to a variable
//Immediately Invoked is invoking the function right away where it's defined

//Example

(function(){
    console.log('Edward is a boy.');
})();

//let greetings = (function(){
//    //let getMesaage = function(){
   //     return message;
   // };
//})();

//console.log(greetings.message);

// using closures

//let greetings = (function(){
  //  let message = 'Hello';
  //  let getMessage = function(){
  //      return message;
   // };
   // return {
        //getMessage: getMessage,
   // };
//})();
//console.log(greetings.getMessage());

//function setupCounter (val){
  //  return function counter() {
   //     return val++;
  //  }
//}
//let counter1 = setupCounter(0);
//console.log(counter1());
//console.log(counter1());
//console.log(counter1());
//let counter2 = setupCounter(10);
//console.log(counter2());
//console.log(counter2());
//console.log(counter2());
//console.log(counter2());

//Improving Readability with 'Arrow' functions
// Arrow exmaples

//let greetings = function(){
   // return 'I am a boy';
//}
//let message = greetings();
//console.log(message);

//with 'Arrow'
let greetings = name => {
    return 'My name is ' + name;
};
let name1 = greetings('Pascal');
console.log(name1);




