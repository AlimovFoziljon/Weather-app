var input = document.getElementById("input")
var button = document.getElementById("button")
var results = document.querySelector(".results")
var statistics = document.querySelector(".results-statistics")
var wind = document.querySelector(".results-wind")
var resultsName = document.querySelector(".results-name")
var key = "e25dcd5d3658cc170ea25d6f32a91cee"    

button.addEventListener("click", getWeather)
window.addEventListener("load", getWeather)



function getWeather(){
    var inputValue = input.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                resultsName.innerHTML = `
                    <h2>Name: ${data.name}</h2>
                    <p>Country: ${data.sys.country}</p>
                    <img class="weather-image" src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>
                    <p>${data.weather[0].main}</p>
                    <p>${data.weather[0].description}</p>
                `
                wind.innerHTML = `
                    <p>Wind deg: ${data.wind.deg}&deg</p>
                    <p>Wind speed: ${data.wind.speed}km/h</p>
                    <p>Pressure: ${data.main.pressure}mbar</p>
                `
                statistics.innerHTML = `
                    <p>Temperature: ${Math.round(data.main.temp)}&degC</p>
                    <p>Feels like: ${Math.round(data.main.feels_like)}&degC</p>
                    <p>Humidity: ${Math.round(data.main.humidity)}%</p>
                `
            })
}