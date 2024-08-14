/*
There are two type of variables one is global and second one is local variables 
 */

//Ex-1:we will declare variables in the global scope so that they can be accessed anywhere in the program.

let name="Bramha";//global variable
myDetails();

function myDetails(){
    city="Bhadrak";//considered global variable
    console.log(typeof name+'-This is my name'+name);
}
console.log(typeof city+'-This is my name '+name+" And this is my city "+city);


//Ex-2:we will declare variables in the local scope and try to access them at different scopes.
myfunction();
anotherFunc();
let petName;
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);
