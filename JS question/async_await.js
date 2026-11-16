// async await promises ke banane se chalta hai

// async function abcd() {
//    let raw = await fetch(`https://randomuser.me/api/`);
//    let data = await raw.json();
//    console.log(data);
// }
// abcd();


function getNum() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            if (num < 5) { 
                resolve(true); 
            }
            else {
                reject(false);
            }
        }, 3000);
    });
}

async function abcd() {
    let v = await getNum();
    console.log(v);
}
abcd();
