let var1 = mul(40, 3);
console.log(var1);

function mul(num1, num2) {
  return num1 * num2;
}

// This program demonstrate that the function is used as the constructor
let resMul = new Function("num1", "num2", "return num1 * num2");

console.log(resMul(25, 4));

// This below code describe about the hoisting of function
print("hello");
function print(name) {
  console.log(name);
}
/*
let reSub=new Function(
   "num1","num2","console.log(num1*num2)"
) 
reSub(20,10);//here function hoisting not work as well as in the arrow function.
*/

// self-invoking function

// syntax:-(function you want to execute)();
//Ex:-
(function () {
  console.log("Hello, World!");
})(); //here no need to call the function
// and it executed only once when the page is load

// we can call a method by using call() method
// Ex-1:-
// function that returns product of two numbers
function product(a, b) {
  return a * b;
}

// Calling product() function
let result = product.call(this, 20, 5);

console.log(result);
//Ex-2:-
let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

// Objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");

let y = employee.details.call(emp1, " Manager ", "4 years");
console.log(x);
console.log(y);



