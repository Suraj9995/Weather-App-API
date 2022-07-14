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




function setCity(){

    let city = document.getElementById('input-city').value;
    cityHeader.innerText = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res=> res.json())
    .then((data)=> {
        console.log(data);
        temp.innerHTML = `Temp : ${Math.round(data.main.temp - 273.15)}<sup>o</sup>C`;
        feel.innerHTML = `Feels Like : ${Math.round(data.main.feels_like - 273.15)}<sup>o</sup>C`;
        tempMin.innerHTML = `Temp-Min : ${Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>C`;
        tempMax.innerHTML = `Temp-Max : ${Math.ceil(data.main.temp_max - 273.15)}<sup>o</sup>C`;
        humidity.innerHTML = `Humidity : ${data.main.humidity}`;
        visibility.innerHTML = `Visibility : ${data.visibility}`;
    });
}