// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

let obj={
    sayName: function(){
        console.log(this);
    },
    sayArrowName: ()=>{
        console.log(this);
    }
}

obj.sayName();
obj.sayArrowName();