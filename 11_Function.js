//Function:-It is a block of reusable code used to reduce the code and complexcity.And it is executed after calling the function that we want to execute.
 function add(a,b){
    return a+b;
 }
//  calling the function
let addRes=add(10,10);
console.log(addRes);

// There are three way we can write the function 
// 1. Function declaration
function addNum(a,b){
    return a+b;
}
// call the addNum function
console.log(addNum(20,30));
;

// 2. Function expression
let addNum2=function(a,b){
    return a+b;
}
// call the addNum2 function
console.log(addNum2(40,50));
;

// or
let addNum3=function addDigit(a,b){
    return a+b;
}
// call the addNum2 function
console.log(addNum3(30,50));

// 3.function as variable value
// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Using the function to convert temperature
  let temperatureInFahrenheit = 77;
  let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
  let text = "The temperature is " + temperatureInCelsius + " Celsius";
console.log(text);

// 4.Arrow function
// Arrow function is a shorthand for a function expression
// making the above program by using arrow function.
  
  // Using the function to convert temperature
  let temperatureInFahrenheit2 = 77;
  let temperatureInCelsius2 = (temperatureInFahrenheit)=> (fahrenheit - 32) * 5/9;
  let text2 = "The temperature is " + temperatureInCelsius + " Celsius";
console.log(text2);


// arrow function with no parameter
// Arrow function with no parameters
const string = () => "Hello EveryOne!";
console.log(string);//Calling the arrow function without parenthesis return the function object.
console.log(string());

// using arrow function within another function
 let arr=["Bheem","Arjun","Ram","Krishna"];
 let arr2=arr.map((string)=>{return string.length});
 console.log(arr2);  

