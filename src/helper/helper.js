/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line global-require
export const getWeatherDataUrl = (city, country) => {
  const config = require('../config.json');
  const url = `${config.weatherDataUrl}/${config.version}/weather?q=${city},${country}&units=${config.units}&appid=${config.weatherDataApiKey}`;
  return url;
};
