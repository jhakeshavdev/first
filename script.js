const p=document.querySelector("p");
const text=p.innerText

const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0
 
function randomtext(){
    const str=text.split("").map((char,index)=>{
        if(index<iteration){
            return char
        }
        return character.split("")[Math.floor(Math.random()*52)]
    }).join("")
    p.innerText=str
    iteration+=0.2
}

setInterval(randomtext,30);