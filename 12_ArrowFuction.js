//Arrow function:-It is an anonymous function
/*//Ex:-
let add = (a, b) => {
  return a + b;
};
console.log(add);
console.log(add(10,10));
*/

//if arrow fuction having only one argument
/*let add = a => {
    return a + 5;
    };
    console.log(add(5));
*/

// If the arrow fuction having only one statement to execute then 
/*let add = a => a + 5;
console.log(add(5));
//or

let add1=a=>(a+5);
console.log(add1(5));//We use parentesis because it is good parctice used to return the object
//Ex:-
let ret=a=>({user:'kamal'});
console.log(ret(10));//{ user: 'kamal' }
//Otherwise
let ret2=a=>{user:'kamal'};
console.log(ret2(10));//undefine
*/

//If the arrow function having no argument then we have to use empty bracket
/*let add = () => {
    return 5 + 5;
};
console.log(add());
 */


//Arrow function doesn't support the protoype properties that is arguments
/*/Normal method
let user={
  show(){
    console.log(arguments);
  }
}
user.show(10,20,30);
*/
// In case of Arrow function
/*let user2 = {
  show_ar: () => {
      console.log(...arguments);//here we get error
  }
  };
  user.show_ar(1, 2, 3);
  //By using this way we can overcome it.
  let user1={
    show: (...args) => {
      console.log(args);
      }
      }
      user1.show(10,20,30);
*/

//Arrow function is not use as constructor
//In case of normal function
/*
let data=function(){
  console.log(arguments);
}
let y=new data(10,20,30);

// incase of the arrow function

let data2=()=>{
  console.log(arguments);
}
let z=new data2(10,20,30);//In node js environment the it is supported but in browser it give an error
// or
let data3=(...arguments)=>{
  console.log(arguments);
}
let w=new data3(10,20,30);
*/
//arrow fuction does not have the own this binding

let emp={
  name:"Rahul",
  emp1(){
    console.log(this.name,"normal function");
  },
  emp2:()=>{
    console.log(this.name,"arrow function");
  }

}
emp.emp1();
emp.emp2();


