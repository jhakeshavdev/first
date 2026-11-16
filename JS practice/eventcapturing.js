let a=document.querySelector(".a");
let b =document.querySelector(".b");
let c =document.querySelector(".c");
let btn =document.querySelector("button");






// // agar hum button par click karenge to pehle button ka event listner chalega then bubble hoke c ka chalega then b ka and then a ka listner chal jayega 
// aur agar kisi bhi element me capturing phase on hoga to pehle capturing phase chalega then bubbling 
// capturing phase main parent to parent to child chalta hai 

btn.addEventListener("click",function(){
    console.log("button clicked");
});

c.addEventListener("click",function(){
    console.log("c clicked");
});

b.addEventListener("click",function(){
    console.log("b clicked");
});

a.addEventListener("click",function(){
    console.log("a clicked");
},true);  //yaha true likha hua matlab capturing phase on hai 