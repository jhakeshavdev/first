// syntax error => aapne code likhte wakt kuchh galti kar di

// Runtime error => likhte wakt error nahi aayega chalate wakt error aayega 
// like :-
// function abc(){
//     let a=12;
//     console.log(a.name.first);
// }
// abc();

// Logical error => aapke logic me kuchh error me , ye screen par error naahi deta hai ye logic hi galat hota hai
// like :-
// function add(a,b){
//     return a-b;
// }
// console.log(add(1,3));


/* try catch jab use karte hai to maan lo ki uss code me kuchh error aa gya hai to wo code nahi chalega aur error dikhayega lekin uske 
    aage ka code chalega  BUT agar try catch use nahi karte hai aur agar tab koi code me error aa gya to koi bhi code nahi chlega pura
    code crash ho jayega aur error dikahyega  */
   /* try{
        console.log(a.name);  // isme error hai bcz a is not defined but agar catch nahi chalayenge to koi error message show nahi karega
    }catch(err){
        console.log(err); // ab catch chalane se error message show karega
    }
    console.log("hello") // ye code chalega w/o any problem rather oopar wale code me error ho ya na ho kyuki oopar wala code 
                        //   try and catch me hai  */


/* Understanding the Error object - [`Mesage`, `name`, `stack`]
    try{
        let a=12;
        console.log(a.name.first);
    }catch(err){
        console.log(err.message); // main message of the error dega bass
        console.log(err.name);    // ye error ke type ka naam dega bass like TypeError
        console.log(err.stack);   // ye full detail dega erro ka like message , name , and kis line me error aaya hai sab kuch 
    } */


/* Chahe try chale ya catch finally ka code hamesha chalega
try{
    let a=12;
    console.log(a);
}catch(err){
    console.log(err);
} finally{
    console.log("Hello");
} */


/* How to throw new error in javascript
try {
    let a=12;
    console.log(a.name.age);
} catch (err) {
     throw new Error(
        "Ye hua javascript se error throw karna method1"
    );
    // or
    console.error(
        new Error( "Ye hua javascript se error throw karna method2")
    );
     
} */