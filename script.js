var btn=document.querySelector('button')
var main=document.querySelector('main')
var h2=document.querySelector('h2')
var inner=document.querySelector('.inner')
var grow=0
var num=50+Math.floor(Math.random()*50)


btn.addEventListener('click',function(){
   var int =setInterval(() => {
    grow++
    h2.innerHTML=grow +'%'
     inner.style.width= grow+'%'
     btn.style.pointerEvents='none'
    }, num)

   setTimeout(function(){
 clearInterval(int)
btn.innerHTML='Downloaded'
btn.style.opacity=0.5

console.log('your file is dowloaded in',num/10, 'sec');

},num*100)


})
