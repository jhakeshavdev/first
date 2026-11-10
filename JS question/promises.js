//promises -> ek kaam jaake karo 
// pending state
// hojaayega -> resolve
// nahi hoga -> reject


let prm =new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

prm.then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Rejected");
});


// fetch se kisi bhi url par jaa sakte hai
// fetch ka data readable nahi hota hai
// ussey readable banane ke liye .json ka use karte hai
// iske baad jo data milta hai wo readable hota hai
// json => javascript object notation

fetch(`https://randomuser.me/api/`)
.then(function(notReadableData){
    return notReadableData.json();
})
.then(function(asliData){
    console.log(asliData.results[0].name.first);
});
// pehle .then me jab hum notReadableData.json return karte hai to ek naya promise ban jata hai jo ki next .then me accept kar sakte hai 

// or we can write like this
fetch(`https://randomuser.me/api/`)
.then((raw) => raw.json())
.then((data) => {
    console.log(data);
})
.catch(function(err){
    console.log(err);
})