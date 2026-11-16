var main=document.querySelector("main")
var btn= document.querySelector("button")

btn.addEventListener('click',function(){
    var div=document.createElement('div')
   
    div.style.height='50px'
    div.style.width='40px'
    

    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)
    var x= Math.floor(Math.random()*90)
    var y= Math.floor(Math.random()*90)
    var rot=Math.floor(Math.random()*360)



    div.style.backgroundColor= `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.rotate = rot+'deg'

   main.appendChild(div)
})