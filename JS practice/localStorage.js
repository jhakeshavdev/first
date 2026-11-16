//store kaise kare
localStorage.setItem("name","keshav");

//kisi variable me uska value kaise nikalte hai(fetch kaise karte hai)
let val=localStorage.getItem("name");

//remove kaise karte hai
localStorage.removeItem("name");

//update kaise kare
localStorage.setItem("name","keshavva");

//array and object nahi likh sakte ,local storage me sirf string hi likh sakte hai to array and objects ko string banane ke liye JSON.stringify 
//use karte hai aur data fetch karenge getItem se to wo string dega kyuki hummne usko json.stringify se string bana diya hai issiliye uske 
//original form me fetch karne ke liye JSON.parse karte hai taaki array ho to array fetch ho aur object ho to object fetch ho .
localStorage.setItem("friends",JSON.stringify(["sumit","amit","mohan"]));
let fr=JSON.parse(localStorage.getItem("friends"));
console.log(fr);