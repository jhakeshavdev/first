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