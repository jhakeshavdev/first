// Create a User constructor function(do not use class syntax)
// Add a login method in two ways:
// First, inside the constructor 
// Then, move the method to the prototype

// Create two User objects and compare their login method using equality.
// Explain why the result is true or false 


// BINA CLASS KE BHI CONSTRUCTOR FUNCTION BANTA HAI 
// es6 se pehle constructor function aise banta hai
    function User(){
        this.name="Keshav";

        // this.login = function(){
        //     console.log("LoggedIn");
        // }

        // jab bhi constructor ke andar login function banyenge to dono user ka apna apna login method hoga i.e. user1.login===user2.login => False

    }
    User.prototype.login = function(){
        console.log("LoggedIn");
    };
    // Abhi yaha login function prototype me hai to user1 and user2 ka login function ka output same hoga i.e. user1.login===user2.login  => true


    let user1= new User();
    let user2= new User();
