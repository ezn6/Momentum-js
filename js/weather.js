const API_KEY = '4c0e1506ad620d4d69d9a9399a0815eb';

function geoSuccess(positon) {
  const lat = positon.coords.latitude;
  const lon = positon.coords.longitude;
  // console.log(`You live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) //
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.name, data.main.temp, data.weather[0].main);
      const name = document.querySelector('#weather span:first-child');
      const temp = document.querySelector('#weather span:nth-child(2)');
      const weather = document.querySelector('#weather span:last-child');
      name.innerText = data.name;
      temp.innerText = data.main.temp;
      weather.innerText = data.weather[0].main;
    });
}

navigator.geolocation.getCurrentPosition(geoSuccess, (error) =>
  alert("Can't find you ...")
);
