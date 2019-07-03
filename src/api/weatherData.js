/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { getWeatherDataUrlArr } from '../helper/helper';

export const getWeatherData = () => {
  // We can add more countries and citites in json file
  const data = require('../data/data.json');
  const arr = [];
  let tmp = false;

  for (let i = 0; i < data.length; i += 1) {
    tmp = getWeatherDataUrlArr(data[i].cities, data[i].country);
    arr.push([...tmp]);
  }
  return arr;
};
