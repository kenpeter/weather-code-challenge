/* eslint-disable no-await-in-loop */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { getWeatherDataUrl } from '../helper/helper';

export const getWeatherData = async () => {
  const data = require('../data/data.json');
  const res = [];

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].cities.length; j += 1) {
      const url = getWeatherDataUrl(data[i].cities[j], data[i].country);
      const fetchRes = await fetch(url);
      const jsonData = await fetchRes.json();
      jsonData.country = data[i].country;
      res.push(jsonData);
    }
  }
  return res;
};
