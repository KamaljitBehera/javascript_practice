//Spec-1:the num variable is block-scoped and it cannot be accessed outside the block. If we try to access the variable outside the block it throws a reference error.
{
    let num=1000;
    console.log(num);
}
// console.log(num);//Here we get error due to let keyword has function scope.

//Spec-2: the num variable is a globally scoped variable and it can be accessed from anywhere in the program.

let name="Shiva";
console.log(name);
function myName(){
    console.log(name);
}
// calling the function
myName();


//Spec-3:the num variable is declared inside the function and cannot be accessed outside the function.
function printAge(){
    let age=35;
    console.log(age);
}
// calling the function
printAge();
// console.log(age);//here we get error due to the let key word has function scope means it can't access outside the function


// Spec-4:Redeclaring Let Variables in different blocks
let number=500;
console.log(number);

function nuM(){
    let number=1000;
    console.log(number);//here priority goes to block scope 
}
//calling the function
nuM();


//Spec-5:Redeclaring Let Variables in the same blocks

let city="Bhubaneswar";
console.log(city);
// let city="Jajpur";//here we get error we can't redeclare the let variable inside same block
console.log(city);

//Spec-6:Let do not support hoisting.
// console.log(greet);//here we get error
let greet="Hello";
// or
x=100;
console.log(x);
let x;
