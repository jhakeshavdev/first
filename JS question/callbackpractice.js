// ek function banao afterDelay
// ye function 2 cheezein lega :
// time(milisecond),callback function
// Given time ke baad callback call kare 
// callback ke andar "Callback executed" print hona chahiye 
// Use case socho :
// "2 second baad ek kaam karna hai"
// goal:
// Samjhane ki callback delay ke baad kaisa execute hota hai
// ye setTimeout + callback connection hai

function afterDelay(time,cb){
    setTimeout(() => {
        cb();

    }, time);

}

afterDelay(2000,function(data){
    console.log("callback executed");
});