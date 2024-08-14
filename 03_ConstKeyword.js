// Spec-1: It describes that the const variable cannot be reassigned. 
const name="Krishna";
console.log(name);
// try to reassign
// name="Bishnu";//here we get error we can't reassign it.
console.log(name);

//Spec-2: It describes the const variable which contains the Block Scope. 
function printAge(){
    const age=24;
    console.log(age);
}
// console.log(age);//here we get error because const is block scoped variable which is not access outside the block
// calling the function
printAge();

//Spec-3:It describes the const variable and assigned it after declaration. 
const city="Cuttack";//we have to assign value at the time of declaration.
// city="Cuttack";
console.log(city);


//Spec-3: It describes the const variable cannot be Hoisted. 
x=30;
console.log(x);
// const x;//Hoisting is not supported by the const keyword

//Spec-4: It describes that the array values can be modified only reference to the array cannot be changed. 
// Changing the content of array is
// possible in cost array
const arr1 = ["pankaj", "sumit", "chandan", "ajay"];

console.log(arr1.toString());

arr1[2] = "Narayan"; // possible

console.log(arr1.toString());

//Spec-5:It describes that the object properties can be modified only reference to the object cannot be changed.
const person = {
    first_name: "Pankaj",
    last_name: "Singh",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};

console.log(person);

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

console.log(person);

// it is not possible
// const person={
// "first_name":"Aryan",
// "last_name":"Yadav",
// "Age":22,
// "About":"Commerce undergraduate"
// }


//Spec-6:it describe that if const declare as global it can access anywhere.
const state="Odisha";
console.log(state);
function myState(){
    console.log(state);
}
// calling the function
myState();