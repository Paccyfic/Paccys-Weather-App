//https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=49770e582688b645f30087634af5d3a1&units=metric
const apiKey = "49770e582688b645f30087634af5d3a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{

    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})






/*/ https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=49770e582688b645f30087634af5d3a1&units=metric
const apiKey: string = "49770e582688b645f30087634af5d3a1";
const apiUrl: string = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox: HTMLInputElement | null = document.querySelector(".search input");
const searchBtn: HTMLButtonElement | null = document.querySelector(".search button");
const weatherIcon: HTMLImageElement | null = document.querySelector(".weather-icon");

async function checkWeather(city: string): Promise<void> {
    const response: Response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
        (document.querySelector(".error") as HTMLElement).style.display = "block";
        (document.querySelector(".weather") as HTMLElement).style.display = "none";
    } else {
        const data: any = await response.json();

        // console.log(data);

        (document.querySelector(".city") as HTMLElement).innerHTML = data.name;
        (document.querySelector(".temp") as HTMLElement).innerHTML = Math.round(data.main.temp) + "°C";
        (document.querySelector(".humidity") as HTMLElement).innerHTML = data.main.humidity + "%";
        (document.querySelector(".wind") as HTMLElement).innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                (weatherIcon as HTMLImageElement).src = "images/clouds.png";
                break;
            case "Clear":
                (weatherIcon as HTMLImageElement).src = "images/clear.png";
                break;
            case "Rain":
                (weatherIcon as HTMLImageElement).src = "images/rain.png";
                break;
            case "Drizzle":
                (weatherIcon as HTMLImageElement).src = "images/drizzle.png";
                break;
            case "Mist":
                (weatherIcon as HTMLImageElement).src = "images/mist.png";
                break;
            default:
                break;
        }

        (document.querySelector(".weather") as HTMLElement).style.display = "block";
        (document.querySelector(".error") as HTMLElement).style.display = "none";
    }
}

if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
        if (searchBox.value.trim() !== "") {
            checkWeather(searchBox.value);
        }
    });
}*/
 