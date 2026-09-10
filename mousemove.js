let abc=document.querySelector("#abc");

window.addEventListener("mousemove",function(dets){
    abc.style.top = dets.clientY + "px";
    abc.style.left = dets.clientX +"px";
})