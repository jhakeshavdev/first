let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#emailerror").textContent="";
    document.querySelector("#passworderror").textContent="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);

    let isvalid=true;

    if(!emailans){
        document.querySelector("#emailerror").textContent="Email is incorrect";
        document.querySelector("#emailerror").style.display="initial";
        isvalid=false;
    }
    if(!passwordans){
        document.querySelector("#passworderror").textContent="Password is incorrect";
        document.querySelector("#passworderror").style.display="initial";
        isvalid=false;
    }

    let confirmpassword=document.querySelector("#confirmpassworderror").textContent="";
    if(confirmpassword!=password){
        document.querySelector("#confirmpassworderror").textContent="Your password didn't matched";
        document.querySelector("#confirmpassworderror").style.display="initial";
        isvalid=false;
    }

    if (isvalid){
        document.querySelector("#successMessage").textContent="Everything is good";
    }
});