var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var sun = document.querySelector('.sun span')
var wind = document.querySelector('.wind span')


async function changeWeatherUI(){
    search.value.trim()
    let apiURL ='https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'

    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data);
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity + '%'
    value.innerText = (data.main.temp - 273,15) 
    shortDesc.innerText = data.weather.main

}

changeWeatherUI()