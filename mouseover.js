let boy = document.querySelector("#boy");

boy.addEventListener("mouseover",function(){
  boy.style.backgroundColor ="yellow";
});

boy.addEventListener("mouseout",function(){
    boy.style.backgroundColor = "red";
});