// ek function banao getUser
// Requirement:
// Username lega
// 1 Second ke baad callback ko ek object de:
// id
// username
// Then:
// Callback ke andar ek aur function call karo getUserPosts
// getUserPosts:
// UserId lega
// 1 Second ke baad callback ko posts ka array de
// Final output:
//User ka username print ho
// Goal:
// samjhna ki ek async ka result next async ko kaise milta hai 

function getUser(username,cb){
    console.log("Fetching user details......")
    setTimeout(() => {
        cb({id: 1, username:username})
    }, 1000);
}

function getUserPosts(id,cb){
    console.log("Fetching all posts.....")
setTimeout(() =>{
    cb(["hekh", "kkjbvkj","jhdbfj"])
},2000);
}

getUser("keshav",function(data){
    console.log(data);
    getUserPosts(data.id,function(allposts){
        console.log(data.username, allposts);
    });
});