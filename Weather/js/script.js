const APIKEY = 'b0d987a7d4c84d04ec89b394f00f28b0';
const searchForm = document.getElementById('form');
const seachInput = document.getElementById('search');
const resultBox = document.getElementById('res');
const weatherImg = document.getElementById('img-weather');


const weatherByCity = async (city, APIKEY) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)

    const data = await response.json()
    console.log(data)

    showWeather(data)
};


const showWeather = (data) => {
    const temperature = toCelcius(data.main.temp)
    const div = document.createElement('div')
    const imgDiv = document.createElement('div')
    resultBox.innerHTML= ''
    weatherImg.innerHTML = ''

    div.classList.add('weather')
    
    div.innerHTML = `
    <h2>
    ${temperature}°
    </h2>
    `
    imgDiv.classList.add

    imgDiv.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    `
    resultBox.appendChild(div)
    weatherImg.appendChild(imgDiv)
};



//From Kelvin to Celcius

const toCelcius = (kelvin) =>{
    return Math.floor(kelvin - 273.15)
};


//////////////////////////////////////////////////////////////////


searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const city = seachInput.value;

    if(city){
        weatherByCity(city, APIKEY)
    }

});


