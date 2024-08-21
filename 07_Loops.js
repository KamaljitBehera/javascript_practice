// There are basically 7 way to use the loop concept in javascript are there.
//1.for loop:-It is used when the number of iteration is known to programmer.
//example:-
for(let i=0;i<10;i++){
    console.log(i);
    console.log("Good Morning");
    
}

//2.while loop:-It is used when the iteration doesn't known to programmer,but know the condition to end the loop.
let i=0;
while(i < 10){
  console.log(i);
  i++;
}

//3.do while loop:-It is similar to while loop but the block of code is executed at least once, even if the condition is false.
let j=0;
do{
    console.log(j);
    j++;
  }while(j<10);


  //4.for in loop:-It is used to loop through the properties or key of an object.
  let person={
    name:'kamal',
    age:20,
    city:'delhi',
  }
  for(let index in person){
    console.log(index+" "+person[index]);
  }
//   It is also used for array
let mark=[90.56,78,93,65,44];
for(let index in mark){
    console.log(index+" "+mark[index]);
  }

//5.for of loop:It is used to loop through the values of an iterable object (such as an array).
//we can not use for of loop in object directly.
let result=[10,30,25,58,96,42,96,36,45];
for(const index of result)
{
    console.log(index);
    
}

//6.for each method
const arr = [1, 2, 3];
arr.forEach(val => console.log(val));


// try to use with object
// person.forEach(val => console.log(val));we can't use forEach method with object.


//7.map method:-is a method on arrays that creates a new array by executing a function on each element in the array.

const newArr = arr.map(val => val * 2);
console.log(newArr);
console.log(arr)

//Other than som specific feature are used in javascript like
// javascript label statement
let sum = 0, a = 1; 

// Label for outer loop :-
outerloop: while (true) { 
    a = 1; 

    // Label for inner loop 
    innerloop: while (a < 3) { 
        sum += a; 
        if (sum > 12) { 

            // Break outer loop from inner loop 
            break outerloop; 
        } 
        console.log("sum = " + sum); 
        a++; 
    } 
}

// Javascript Break statement:-is used to terminate the execution of the loop or switch statement when the condition is true.
for (let i = 1; i < 6; i++) {
    if (i == 4) 
        break;
        
    console.log(i);
}


//Javascript continue statement:- is used to break the iteration of the loop and follow with the next iteration. The break in iteration is possible only when the specified condition going to occur.

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) 
        continue;
        
    console.log(i);
}

//JavaScript Infinite Loop (Loop Error)

// Infinite loop because condition is not false
// condition should have been i>0.
for (let i = 5; i != 0; i -= 2) {
    console.log(i);
}

let x = 5;

// Infinite loop because update statement
// is not provided
while (x == 5) {
    console.log("In the loop");
}
