var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var sun = document.querySelector('.sun span')
var wind = document.querySelector('.wind span')


function changeWeatherUI(){
    search.value.trim()
    let apiURL ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a1e51a2e1930131165494fcf7790daad}'
}