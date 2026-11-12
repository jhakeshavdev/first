function kuchhderbaadchalunga(fnc){
    setTimeout(fnc,Math.floor(Math.random()*10)*1000);
}

kuchhderbaadchalunga(function(){
    console.log("hey");
});  // this paarameter waala function  called callback function 

//callback
function profilelekaraao(username,cb){
    console.log("Fetching profile data........")
    setTimeout(() => {
        // console.log(`profile fetched of ${username}`);
        cb({_id:1246,username,age:20,email:"helloo@jhkg.com"});
    }, 2000);
}

function saarepostlekaraao(id,cb){
    console.log("Fetching all posts.......")
    setTimeout(()=>{
    cb({_id:id,posts: ["hehg", " bgbnk", "bbjvb","ifdgik"]});
    },3000);
}

function savedpostsnikalo(id,cb){
    console.log("Fetching all saved posts...... ")
    setTimeout(() => {
        cb({_id:id,saved:["wjbdj","idjk","jvgdhjb"]})
    }, 4000);
}


profilelekaraao("keshav",function(profiledata){
    console.log(profiledata); 
    saarepostlekaraao(profiledata._id,function(posts){
        console.log(posts);
    savedpostsnikalo(profiledata._id,function(saved){
        console.log(saved);
    });
    });
});




// Callback :- A function that is passed as an argument to another function and is executed at a later time.
                // ek function jo turant nahi chalega , ye chalega jab aapka koi kaam complete hoga.

                // getDataFromInstagram("keshav",function(){
                

               //    })     => yaha par jo function hai ye callback function hai jo ki getDataFromInstagram ke andar pass kiya gaya hai 
               //               aur ye "keshav" ke liye data fetch karne ke baad chalega.