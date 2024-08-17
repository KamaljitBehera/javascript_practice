// The below code demonstrate the datetypes present in javascript  and how to use them.

// There are two type of datatype in javascript
// 1. Primitive Datatype
//a.Number
let number1=10;
console.log(number1);
console.log(typeof number1);

let number2=5.6;
console.log(number2);
console.log(typeof number2);

let number3=Infinity;
console.log(number3);
console.log(typeof number3);

let number4='somthing'/2;
console.log(number4);
console.log(typeof number4);

let number5=3.434343434343;
console.log(number5);
console.log(typeof number5);

//b.String

// By using double quotes
let string1="Hello There!";
console.log(string1);
console.log(typeof string1);

// By using single quotes
let string2='Good morning';
console.log(string2);
console.log(typeof string2);

// by using string literals
let string3=`hello How are you?`;
console.log(string3);
console.log(typeof string3);


//c.boolean

let istrue=false;
console.log(istrue);
console.log(typeof istrue);

let isfalse=true;
console.log(isfalse);
console.log(typeof isfalse);

/*let iswork=FALSE;
console.log(iswork);
console.log(typeof iswork);*///Here we get error

/*let isok=True;
console.log(isok);
console.log(typeof isok);*///here we get error

//d.null

let value1=null;
console.log(value1);
console.log(typeof value1);

/*let value2=NULL;
console.log(value2);
console.log(typeof value2);
*///here we get error

//e.Undefined
let isDefined;
console.log(isDefined);
console.log(typeof isDefined);

//f.symbols
//we can create user defined symbols by using the Symbols method

let symbol1 = Symbol("Geeks")
console.log(symbol1);
console.log(typeof symbol1);

let symbol2 = Symbol("Geeks")
console.log(symbol2);
console.log(typeof symbol2);
// Each time Symbol() method 
// is used to create new global Symbol
console.log(symbol1 == symbol2); // False

//g.BigInt

let bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);
// 2. Non-Primitive Datatype
   //a.Object
       // a1.By using new Keyword
           let obj1=new Object();
           console.log(obj1);
           console.log(typeof obj1);
        
        //a2.by using curly braces
        let obj2={};
        console.log(obj2);
        console.log(typeof obj2);
    //we can store data in the object in the form of key and value pair,like
    let person={
        name:"kamal",
        age:20,
    }
    console.log(person);
    //to get indivisual value like key and value pairs
    console.log(person.name);
    console.log(person.age);

    //b.array
    //a1.by using new keyword
    let arr1=new Array();
    console.log(arr1);
    console.log(typeof arr1);
    //a2.by using square brackets
    let arr2=[1,2,3,4,5];
    console.log(arr2);
    console.log(typeof arr2);
    //we can store data in the array in the form of index and value pair,like
    let marks=[10,20,30,40,50];
    console.log(marks);
    //to get indivisual value like index and value pairs
    console.log(marks[0]);
    console.log(marks[1]);
    
    
           