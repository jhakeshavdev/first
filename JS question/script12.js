// async/await 

let pr = new Promise(function(res,rej){
setTimeout(()  => {
let rn = Math.floor(Math.random() * 10);
if(rn > 5 ) res("Resolve with " + rn);
else rej("Rejected with " + rn);
},1000);
});

// asyn await is more cleaner way to handle the resolve and reject of the promises
async function abcd(){
    try{
       let val = await pr;
       console.log(val);
    } catch(err){
        console.log(err);
    }
}

//  agar reosolve hua to try ka code kafi hai but agra reject hua to catch ka code likhna jaruri hai 
abcd();