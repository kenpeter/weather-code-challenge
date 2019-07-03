/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { getWeatherDataUrlArr } from '../helper/helper';

export const getWeatherData = () => {
  const data = require('../data/data.json');
  const arr = getWeatherDataUrlArr(data.cities, data.country);

  console.log(arr);

  return arr;
};
