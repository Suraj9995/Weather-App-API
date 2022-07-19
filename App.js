const API_KEY = 'df74c9809eb1f3423095fa1df712d962';
let cityName = 'Pune';
const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
const temp = document.getElementById('temp');
const feel = document.getElementById('feel');
const tempMin = document.getElementById('temp-min');
const tempMax = document.getElementById('temp-max');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const cityHeader = document.getElementById('city');
const currentWeather = document.getElementById('current-weather-info');
const weatherIcon = document.getElementById('weather-icon');

function setCity(){

    let city = document.getElementById('input-city').value;
    cityHeader.innerText = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res=> res.json())
    .then((data)=> {
        if(data.cod == 404){
            console.log(data.message);
            temp.innerHTML = `${data.message}`;
            feel.innerHTML = `Feels Like : 0<sup>o</sup>C`;
            tempMin.innerHTML = `Temp-Min : 0<sup>o</sup>C`;
            tempMax.innerHTML = `Temp-Max : 0<sup>o</sup>C`;
            humidity.innerHTML = `Humidity : 0%rh`;
            visibility.innerHTML = `Visibility : 0 m`;
        }
        console.log(data);
        temp.innerHTML = `Temp : ${Math.round(data.main.temp - 273.15)}<sup>o</sup>C`;
        feel.innerHTML = `Feels Like : ${Math.round(data.main.feels_like - 273.15)}<sup>o</sup>C`;
        tempMin.innerHTML = `Temp-Min : ${Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>C`;
        tempMax.innerHTML = `Temp-Max : ${Math.ceil(data.main.temp_max - 273.15)}<sup>o</sup>C`;
        humidity.innerHTML = `Humidity : ${data.main.humidity} %rh`;
        visibility.innerHTML = `Visibility : ${data.visibility} m`;
        currentWeather.innerHTML = `${data.weather[0].main}`;

        if(data.weather[0].main == 'Clouds' && data.weather[0].description == 'overcast clouds' || data.weather[0].description == 'broken clouds'){
            weatherIcon.src = './Img/broken-clouds.png';
        }
        if(data.weather[0].main == 'Clouds' && data.weather[0].description == 'few clouds'){
            weatherIcon.src = './Img/few-clouds.png';
        }
        if(data.weather[0].main == 'Clouds' && data.weather[0].description == 'scattered clouds'){
            weatherIcon.src = './Img/scattered-clouds.png';
        }
        if(data.weather[0].main == 'Clear' && data.weather[0].description == 'clear sky'){
            weatherIcon.src = './Img/clear-sky.png';
        }
        if(data.weather[0].main == 'Mist' || data.weather[0].main == 'Smoke' || data.weather[0].main == 'Haze' ||
            data.weather[0].main == 'Dust' || data.weather[0].main == 'Fog' || data.weather[0].main == 'Sand' ||
            data.weather[0].main == 'Dust' || data.weather[0].main == 'Ash' || data.weather[0].main == 'Squall' ||
            data.weather[0].main == 'Tornado'){

            weatherIcon.src = './Img/mist.png';
        }
        if(data.weather[0].main == 'Snow'){
            weatherIcon.src = './Img/snow.png';
        }
        if(data.weather[0].main == 'Rain' && data.weather[0].description == 'light rain' || data.weather[0].description == 'moderate rain' ||
            data.weather[0].description == 'heavy intensity rain' || data.weather[0].description == 'very heavy rain' || data.weather[0].description == 'extreme rain'){
            weatherIcon.src = './Img/rain.png';
        }
        if(data.weather[0].main == 'Rain' && data.weather[0].description == 'freezing rain'){
            weatherIcon.src = './Img/snow.png';
        }
        if(data.weather[0].main == 'Rain' && data.weather[0].description == 'light intensity shower rain' || data.weather[0].description == 'shower rain' ||
        data.weather[0].description == 'heavy intensity shower rain' || data.weather[0].description == 'ragged shower rain'){
            weatherIcon.src = './Img/shower-rain.png';
        }
        if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = './Img/shower-rain.png';
        }
        if(data.weather[0].main == 'Thunderstorm'){
            weatherIcon.src = './Img/thunderstorm.png';
        }
    });
}