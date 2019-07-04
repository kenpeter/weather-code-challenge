/* eslint-disable no-await-in-loop */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { getWeatherDataUrl } from '../helper/helper';

export async function getWeatherData() {
  const data = require('../data/data.json');
  const res = [];

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].cities.length; j += 1) {
      const url = getWeatherDataUrl(data[i].cities[j], data[i].country);
      const p1 = await fetch(url);
      const p2 = await p1.json();
      p2.country = data[i].country;
      res.push(p2);
    }
  }
  return res;
}
