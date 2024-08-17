//the below program describe about the operators present is javascript and how to use it.
//operators in javascript are used to perform operations on variables and values.

//javascript has the following operators
//1.Arithmatic Operator
//    a.Addition Operator(+)
        let num1=10,num2=20;
        let sum = num1+num2;
        console.log("addition is "+sum);

//    b.Substraction Operator(-)
        let sub=num2-num1;
        console.log("Substraction is "+sub);

//    c.Multiplication Operator(*)  
        let mul=num1*num2;
        console.log("Multiplication is"+mul);

//    d.Division Operator(/)
        let div=num2/num1;
        console.log("Division is "+div);

//    e.Modulus Operator(%)
        let mod= num1%num2;
        console.log("Modulos is "+mod);

//   f.Exponentian Operator(**)
       let expo=num1**num2;
       console.log("Exponential is "+expo);
    
//  g.Increment Operator(++)
//     g.1.Pre-Increment
           let inc=++num1;
           console.log("Pre-Increment is "+inc);
           console.log("value of num1 is "+num1);

//     g.2.Post-Increment
           let postInc=num2++;
           console.log("Post-Increment is "+postInc);
           console.log("value of num1 is "+num2);
//  h.Decrement Operator(--)
//     h.1.Pre-Decrement
           let preDec=--num1;
           console.log("Pre-Decrement is "+preDec);
           console.log("value of num1 is "+num1);

//      h.2.Post-Decrement
             let postDec=num2--;
             console.log("Post-Decrement is "+postDec);
             console.log("value of num1 is "+num2);

//  i.Unary Operator
//    i.1.Unary  plus Operator
          let unaryPlus=+num1;
          console.log("Unary Plus is "+unaryPlus);
//    i.2.Unary Minus Operator
          let unaryMinus=-num1;
          console.log("Unary Minus is "+unaryMinus);
//    i.3.Unary Plus/Minus Operator
          let unaryPlusMinus=+num1-num2;
          console.log("Unary Plus/Minus is "+unaryPlusMinus);


//2.Assignment Operator
    // a.Assign Operator(=)
         let numb4=10;
         console.log(numb4);

    // b.Addition Assignment Operator(+=)
         let num5=numb4+=10;
         console.log(num5);

    // c.Subtraction Assignment Operator(-=)
         let num6=num5-=10;
         console.log(num6);

    // d.Multiplication Assignment Operator(*=)
         let num7=num6*=10;
         console.log(num7);

    //  e.Division Assignment Operator(/=)
         let num8=num7/=10;
         console.log(num8);

    //  f.Modulus Assignment Operator(%=)
         let num9=num8%=10;
         console.log(num9);

    // g.Exponentian Assignment Operator(**=)
         let num10=numb4**=10;
         console.log(num10);

    // h.Left Shift Assignment(<<=)
         let num11=numb4<<=10;
         console.log(num11);

    // i.Right Shift Assignment(>>=)
         let num12=numb4>>=10;
         console.log(num12);

    // j.Bitwise AND Assignment(&=)
         let num13=num12&=10;
         console.log(num13);

    // k.Bitwise AND Assignment(&=)
         let num14=num13|=10;
         console.log(num14);
    // l.Bitwise XOR Assignment(^=)
         let num15=num14^=10;
         console.log(num15);

         
//3.Assignment Operator
    // a.Equality Operator(==)
         let dig1=10;
         let dig2='10';
         let dig3=20;
         let dig4=undefined;
         console.log(dig1==dig2);//double equals to operator checks the content
     
    // b.Strictly Equality(===)  
         console.log(dig1===dig2);//Triple equal to operator checks the content as well as the which type of data it is.

    // c.Inequality Operator(!=)
         console.log(dig1!=dig3);

    // d.Strictly inequality Operator(!==)     
         console.log(dig1!==dig2);

    // e.Greater Than Operator(>) 
         console.log(dig1>dig3);

    // f.Less Than Operator(<)
         console.log(dig1<dig3);

    // g.Greater Than Equals Operator(>) 
         console.log(dig1>=dig3);

    // h.Less Than Equals Operator(<=)
         console.log(dig1<=dig3);
      
         
//4.Logical Operator
    // a.Logical AND Operator(&&)
         console.log(dig4 && dig1);//It checks the value is null, undefined or 0,or false then returns undefined other wise return the last value as execute from left to right.
        
    // b.Logical OR Operator(||)
         console.log(dig4 || dig1);//It checks the value is null, undefined or 0,or false for both the value then it return undefined other wise return last value.

    // c.Logical NOT Operator(!)
         console.log(!dig4);//It checks the value is true or false then return opposite value.
         console.log(!dig1);
        

//5.Bitwise Operator
    // a.Bitwise AND Operator(&)
         let A = 6; // Binary: 110
         let B = 1; // Binary: 001
         let resultAnd = A & B; // Result: 000 (binary) = 0 (decimal)
         console.log(resultAnd); 

    // b.Bitwise OR Operator(|)
         let resultOr = A | B; // Result: 111 (binary) = 7 (decimal)
         console.log(resultOr);     
         
    // c.Bitwise XOR Operator(^)
         let resultXor = A ^ B; // Result: 111 (binary) = 7 (decimal)
         console.log(resultXor);

    // d.Bitwise NOT Operator(~)
         let resultNotA = ~A; // Result: -7
         console.log(resultNotA);

    //e.Bitwise Left Shift Operator(<<)
         let resultLeftShift = A << B; // Result: 1100 (binary) = 12 (decimal)
         console.log(resultLeftShift);     

    //f.Bitwise Right Shift Operator(>>)
         let resultRightShift = A >> B; // Result: 11 (binary) = 3 (decimal)
         console.log(resultRightShift);
    
    //g.Bitwise zero fill Right Shift(>>>)
         let resultZeroFillShift = A >>> B; // Result: 11 (binary) = 3 (decimal)
         console.log(resultZeroFillShift);

//6.Ternary Operator
// Assigning values
   let PMarks = 40

// Ternary Operator
    let result = (PMarks > 39) ?"Pass" : "Fail";
    console.log(result);

//7.JavaScript Unary Operator
// a.delete Operator
     let emp = { 
	   firstName: "Raj", 
	   lastName: "Kumar", 
	   salary: 40000 
     } 

     console.log(delete emp.salary); 
     console.log(emp);

// b.typeof operator
     console.log(typeof emp);

//8.JavaScript Relational Operator
   // a. in operator
   // Creating an object
         let car = {
            make: 'Toyota',
            model: 'Camry',
            year: 2022
        };
  
         // Checking if a property exists using the 'in' operator
         let hasMake = 'make' in car;
         let hasColor = 'color' in car;
  
         // Outputting the results
         console.log('Has make property:', hasMake); // Output: true
         console.log('Has color property:', hasColor); // Output: false
  
    // b.instanceof operator
      // Creating a constructor function
         function Car(make, model, year) {
             this.make = make;
             this.model = model;
             this.year = year;
                    }
  
             // Creating an instance of the Car constructor
             let myCar = new Car('Toyota', 'Camry', 2022);
  
             // Checking if the object is an instance of a particular class using the 'instanceof' operator
             let isCarInstance = myCar instanceof Car;
  
             // Outputting the result
             console.log('Is myCar an instance of Car?', isCarInstance); // Output: true


// 9.Concartination Operator
let name="kamal";
       console.log("My name is "+name);
       
  