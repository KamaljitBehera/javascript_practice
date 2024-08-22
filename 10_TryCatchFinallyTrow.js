//We can handle the exception by using try and catch block.
// Example:-
try {
    dadalert("Welcome Fellow Geek!");
}
catch (err) {
    console.log(err);
}

// After getting the exception the catch block executed otherwise not.
try {
    console.log("hello everyone");
}
catch (err) {
    console.log(err);//Here this catch block is not executed.
}

// After the handling of code by catch block then remaining other code is getting executed.
// finally block is a block which is executed either the exception handled or not.
try {
    dadalert("Welcome Fellow Geek!");
}
catch (err) {
    console.log(err);
}
finally{
    console.log("Hello i am the finally block");
    
}
//by using the throw keyword we can generate our own error
try {
   throw new Error("I am new error");
   
}
catch (err) {
    console.log(err);
}
