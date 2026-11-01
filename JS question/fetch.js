fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((rawdata) => {
       return rawdata.json();
    })
    .then((data) =>{
        console.log(data.company.name);
    })
    .catch((err) =>{
        console.log(err);
    })

    // pehle then ke andar hamare pass raw data aata hai jisko ki hum use nahi kar sakte hai issiliye dusra then lagate hai aur pehla then me rawdata ko json me covert kar sakte hai 

    // or oopar wala then ke code ko chhota kar sakte hai iss prakar 
    .then((raw)=>raw.json())
    .then((data) => console.log(data.company.name))