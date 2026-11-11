// debouncing and throttling

// debouncing:- ye wo hai jab hum jo timer set kiye uss timer tak agar hum kuchh naahi bolenge to ye chalega 
// like:-  ham kuchh type kar rhe hai aur agar hum timer 400ms kaa set kiye hue hai to agar hum 400ms tak kuchh type nahi karenge to debouncing function chal jayega
// request jayadaa na jaaye issiliye hame debouncing use kaarni parti hai


function debouncing(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,delay);
    };
}

let search = document.querySelector("#search");
 search.addEventListener("input",
    debouncing(function(){
        console.log("writing stop");
    },400)
 )


 // throttling :- matlab hum mousemove ka rhe hai lekin mera throttle function me jo likhe honge wo 2-2 second par chalta rhega aur agar hum mousemove karna band kar denge then throttle ke andar bhi jo code hai wo bhi nahi chalega 
function throttle(fn,delay){
    let last =0;
    return function(){
        const now = Date.now();
        if(now-last >= delay){
            last = now;
            fn();
        }
    }
}
window.addEventListener("mousemove",throttle(function(){
console.log("HELLO");
},2000))


// json parse     -> json se object banaate hai
// json stringify -> json banaate hai