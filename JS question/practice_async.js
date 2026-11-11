// scenario 1: Weather Dashboard with Error Handling
// Build aa small Weather dashboard that fetches current weather data from any public weather API (such as OpenWeatherMap)

//you must make the API request asynchronously using fecth with async/await.

// if the API request falis (for example, due to an invalid city name), you must handle the error using try/catch.

// Additionally, create and throw custom errors based on weather conditions.
// For example:
// If the temperature is extremely high or extremely low , throw error and handle it properly in your code.


async function getWeather(city){
   try{
   let apikey =`3cc1f68428d9138c9667b1c0cd8c75ce`;
   let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    if(!raw.ok){
        throw new Error("Something went wrong");
    }
    let realData = await raw.json();
    if(realData.main.temp<0){
        console.warn(`Too cold out there ...... ${realData.main.temp}C`)
    }
    else if(realData.main.temp > 40){
        console.warn(`Too hot out there ...... ${realData.main.temp}C`)
    }
    else{
        console.log(realData);
    }

   }catch(err){
    console.log(err.message);
   }
    // .then((raw) =>raw.json())
    // .then((result) =>{
    //     console.log(result);
    // })
}
getWeather("new zealand");



