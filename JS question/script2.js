// if you have 5 user then using a class write code for 5 user

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    loggedIn(){
        console.log("Logged in");
    }
}

let user1=new user("keshav","keshav@in");
let user2=new user("Rahul","Rhaul@in");
let user3=new user("Sumit","Sumit@in");
let user4=new user("Sohan","Sohanv@in");
let user5=new user("Rohan","Rohan@in");