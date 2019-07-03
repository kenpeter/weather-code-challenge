/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line global-require
export const getWeatherDataUrl = (city, country) => {
  const config = require('../config.json');
  const url = `${config.weatherDataUrl}/${config.version}/weather?q=${city},${country}&units=${config.units}&appid=${config.weatherDataApiKey}`;
  return url;
};

export const getWeatherDataUrlArr = (cities, country) => {
  const arr = [];
  for (let i = 0; i < cities.length; i += 1) {
    arr.push(getWeatherDataUrl(cities[i], country));
  }
  return arr;
};
