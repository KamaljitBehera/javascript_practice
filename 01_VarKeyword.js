//Spec-1: We can access the gobal scope variable any where accrross the program
var name="Ganesh";
function printName(){
    console.log(name);
}
// calling the function
printName();

//Spec-2: we will declare multiple variables in a single statement
var age=25,city="Bangalore";
function printDetails(){
    console.log(name,age,city);
}
// calling the function
printDetails();

// Spec-3:we will see the hoisting of variables declared using var
// here we see that before decalring and initialising the variable we can use it.It is only supported in the var keyword.

console.log(greet);//Here we should get error but in javascript the var keyword support hoisting..
var greet="Good morning";

//Spec-4:we will see the hoisting of variables declared using var.
 var language="English";
 console.log(language);

 var language="Javascript";//here we should get error but javascript var keyword support multiple declaration of same variable.
//  And the each redeclaration the previous value is replace by the new value
 console.log(language);

 var language=2;
 console.log(language);
 


 //Spec-5:we will redeclare the variable in another scope and see how it is the original variable.
 //here we try to redeclare the same variable with different scope the see what happend

 var test="good";
 function hello(){
    var test="bad";
    console.log(test);
 }
hello();
 console.log(test);
 

//  Spec-6:we will try to delete a global variable declared using var in the ‘use strict’ mode

"use strict";

var myVar = 10;

 var isDelete=delete myVar; 
 console.log(isDelete);

 