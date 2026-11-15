// Teen functions banao:
// loginUser
// 1 second baad callback ko user object de 
// fetchPermission
// userId lega
// 1 second baad callback ko permission array de
// loadDashboard
// permission lega
// 1 second baad callback ko "Dashboard loaded" bole
// Flow:
// pehle loginUser
// uske baad fetchPermission
// uske andar loadDashboard 
// Final output console mein print ho 
// Goal:
// callback nesting ko feel karna 
// yehi structure baad mein callback hell banta hai

function loginUser(username,cb){
    console.log("Fetching user data.......")
    setTimeout(() =>{
        cb({id:5432,username:"keshav"})
    },1000);
}

function fetchPermission(id,cb){
    console.log("Fetching permissions......")
    setTimeout(() => {
        cb(["read", "write", "delete"])
    }, 2000);
}

function loadDashboard(permissions,cb){
    console.log("loading Dashboard.....")
    setTimeout(() => {
        cb();
    }, 2000);
}

// callback hell
loginUser("keshav",function(data){
    console.log(data);
    fetchPermission(data.id,function(permissions){
        console.log(permissions);
        loadDashboard(permissions,function(){
            console.log("Dashboard loaded");
        });
 });
});

// callback hell ko solve karta hai promises
    
        
    
