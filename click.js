let fileinp=document.querySelector("#fileinp");
let btn=document.querySelector("#btn")

btn.addEventListener("click",function(){
    fileinp.click();
});

fileinp.addEventListener("change",function(dets){
const file=dets.target.files[0];
if(file){
btn.textContent=file.name;
}
});
