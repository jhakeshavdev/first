// Scenario 2: Bulk Email Sending Simulation With Parallel Promises and Error Handling 

// Think of a scenario where you want simulate sending bulk emails to 5 Users.
// Treat each email-sending opertaion as a Promise (You may simulate it using setTimeout)

// All emails must be sent in parallel using Promise.all.

// If any emails fails (for example ,dur to a random failure condition), you must catch the error and cleraly show which specific email failed.

// In addition, use a finally block to display a message indicating that the "Email process is complete".


const users = [
    "akarsh@female.com",
    "satvik@hemale.com",
    "chamgadar@pakshi.com",
];

function sendEmail(email){
    return new Promise((resolve,reject) => {
        let time = Math.floor(Math.random() * 5);
        setTimeout(() => {
        let probability = Math.floor(Math.random() * 10);
        if(probability < 5){
            resolve("Email successfullty sent.");
        }
        else reject("Email not sent.");
        },time * 1000);
    });
}

async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){  // map kya karega ki ek blank array bana dega
    return sendEmail(email)
    .then(function(data){
        return data;
    })
    .catch(function(err){
        return err;
    });
});
 
let ans = await Promise.all(allresponses);
ans.forEach(function(status){
    console.log(status);
});
}

sendEmails(users);