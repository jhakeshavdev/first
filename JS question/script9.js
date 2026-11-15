// Call, Apply, bind
//Create a function that prints this.name
//create an object that contains a name property


function acd(a,b,c,d){
    console.log(this.name);

    // console.log(this.name +" "+a,b,c,d); // ye apply ke liye hai 
}

let obj ={
    name:"keshav",
};

acd(); // aise call karne se name ka value kuchh nahi aayega bca yaha this ka value window hota hai 
acd.call(obj); //aise karne se aa jayega name ka value , wahi value aayega jo obj me hai name ka value 

acd.apply(obj,[1,2,3,4]);

let fnc = acd.bind(obj); //bind ka value pehle function me save karte hai then uss function ko jab call  karenge tab chalega 
fnc();