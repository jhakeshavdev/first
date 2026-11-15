// promise 

let pr = new Promise(function(resolve,reject){
setTimeout(()=>{
let rn =  Math.floor(Math.random()*10);
if(rn > 5) resolve("Resolved with " + rn);
else reject("Rejected with " + rn);
},3000);
});

// pr  par agar pr.then laga hua rhaa to resolve chalega aur agar pr.catch laga hua rha to reject chalega but dono me se koi ek hi chalega 

pr.then(function(val){
    console.log(val)
}).catch(function(val){
    console.log(val);
})