1.
function greet(name,cb){
    console.log("Hello " + name+"!");
    cb();
}
greet("keshav",function(){
    console.log("Welcome to javascript.");
})


2.
function add(a,b,cb){
    cb(a,b);
}
add(5,7,function(a,b){
    console.log(`sum is ${a+b}`);
})


3.
function print(cb){
    setTimeout(()=>{
        cb();
    },2000)
}
print(function(){
    console.log("Hello");
})


4.
function checkNumber(number,cb){
    cb(number);
}

checkNumber(34,function(num){
    if(num%2==0) console.log(`${num} is even`);
    else console.log(`${num} ie odd`);
})


5.
function myForEach(arr,cb){
    cb(arr);
}
myForEach([54,965,55,65],function(a){
    a.forEach(element => {
        console.log(element);
    });

    // console.log(a[0]+"\n"+a[1]+"\n"+a[2]+"\n"+a[3]);
})


6.
function findMax(a,b,cb){
    cb(a,b);
}
findMax(98,64,function(num1,num2){
    if(num1>num2) console.log(`${num1} is maximum b/w ${num1} and ${num2}`);
    else console.log(`${num2} is maximum b/w ${num1} and ${num2}`);
})


7.
function filterArray(arr,cb){
    cb(arr);
}
filterArray([64,9885,63,96,24,55],function(a){
    a.forEach(element => {
        if(element%2==0) console.log(element);
    });
})


8. 
function calculator(num1,num2,oper,cb){
    cb(num1,num2,oper);
}
calculator(5,8,'*',function(a,b,op){
 if(op=='+') console.log(a+b);
 else if(op== '-') console.log(a-b);
 else if(op== '*') console.log(a*b);
 else {
    if(b==0) console.log("Invalid INPUT");
    else
    console.log(a/b);}
})


9.
function checkResult(number,cb){
    cb(number);
}
checkResult(86,function(num){
    if(num>=40){
        console.log(`Marks : ${num}`);
        console.log(`Result : Pass`);
    }
    else{
        console.log(`Marks : ${num}`);
        console.log(`Result : Fail`);
    }
})


10. 
function processUser(username,cb1,cb2){
    cb1(username);
    cb2();
}
processUser("Keshav",function(username){
    console.log(`Username : ${username}`);
    
},
function(){
    console.log("Login Successful");
})