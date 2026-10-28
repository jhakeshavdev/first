// var h1=document.querySelector("h1");
// console.log(h1); sometimes it doesnot work then write below line
// console.dir(h1); 

// h1.innerHTML="All good Bhai";


// change js
let h1=document.querySelector("h1");
window.addEventListener("keydown",function(dets){
// console.log(dets.key);

//    h1.textContent=`${dets.key}`;
    if(dets.key===" "){
        h1.textContent="SPC"; 
    }
    else{
        h1.textContent=dets.key;
    }
    console.log(dets);
});