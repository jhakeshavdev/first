var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var main= document.querySelector('main')


var arr=[
    {
        TEAM:'RCB',
        PRIMARY:'RED',
        SECONDARY:'GOLD',
        CAPTAIN:'RAJAT PADTIDAR',
        TROPHY:'0NE'
    },
    {
        TEAM:'MI',
        PRIMARY:'BLUE',
        SECONDARY:'LIGHTBLUE',
        CAPTAIN:'HARDIK PANDYA',
        TROPHY:'FIVE'
    },
    {
        TEAM:'CSK',
        PRIMARY:'YELLOW',
        SECONDARY:'BLUE',
        CAPTAIN:'RITURAJ GAYAKWAD',
        TROPHY:'FIVE'
    },
    {
        TEAM:'KKR',
        PRIMARY:'PURPLE',
        SECONDARY:'GOLD',
        CAPTAIN:'AJINKYA RAHANE',
        TROPHY:'THREE'
    },
    {
        TEAM:'DC',
        PRIMARY:'BLUE',
        SECONDARY:'GOLD',
        CAPTAIN:'AXAR PATEL',
        TROPHY:'ZERO'
    },
    {
        TEAM:'PBKS',
        PRIMARY:'RED',
        SECONDARY:'BLUE',
        CAPTAIN:'SHREYAS IYER',
        TROPHY:'ZERO'
    },
    {
        TEAM:'LSG',
        PRIMARY:'RED',
        SECONDARY:'BLUE',
        CAPTAIN:'RISHABH PANT',
        TROPHY:'ZERO'
    },
    {
        TEAM:'RR',
        PRIMARY:'PINK',
        SECONDARY:'LIGHTPINK',
        CAPTAIN:'RIYAN PARAG',
        TROPHY:'ONE'
    }
]


btn.addEventListener('click',function(){
    var Winner=arr[Math.floor(Math.random()*arr.length)]
h2.innerHTML = Winner.TEAM
h2.style.backgroundColor=Winner.PRIMARY
main.style.backgroundColor=Winner.SECONDARY

console.log(Winner)

}
)