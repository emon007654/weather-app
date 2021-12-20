var inputCity = document.querySelector('#inputCity');
var display = document.querySelector('.display')
var submit_button = document.querySelector('#submit_button');
// var discrioton = document.querySelector('#discrioton')
var temp = document.querySelector('#temp')
const name = document.getElementById('#name')
const nameOfTheCity = document.querySelector('.nameOfTheCity')
const temperatureOfTheCity = document.querySelector('.temperatureOfTheCity')
const discriptionOfTheCity = document.querySelector('.discriptionOfTheCity')
const humidity = document.querySelector('.humidity')



submit_button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=75ddaae02e712c365727583376c33a1b').then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            var nameOfTheCityValue = data['name']
            var temperatureValue = data['main']['temp']
            var discriptions = data['weather'][0]['description']
            var humidityValue = data['main']['humidity']


            nameOfTheCity.innerHTML = nameOfTheCityValue
            temperatureOfTheCity.innerHTML = "temp: " + temperatureValue;
            humidity.innerHTML = "Humidity: " + humidityValue;
            discriptionOfTheCity.innerHTML = "Discription: " + discriptions;
        })
        .catch((error) => {
            console.log(error)

        })
})