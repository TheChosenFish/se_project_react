export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  // const weather = {temp: {F: Math.round(temp), C: Math.round((data.main.temp - 32) * 5/9)}}
  result.city = data.name;
  result.type = getWeatherType(data.main.temp) 
  result.temp = { F: Math.round(data.main.temp), C: Math.round((data.main.temp - 32) * 5/9) };
  result.isDay = isDay(data.sys , Date.now());
  console.log(result)
  return result;
 
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};





export const getWeatherType = (temp) => {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};



// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);