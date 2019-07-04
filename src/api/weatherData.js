/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { getWeatherDataUrlArr } from '../helper/helper';

export async function getWeatherData() {
  const data = require('../data/data.json');
  let arr = [];
  let tmp = [];

  for (let i = 0; i < data.length; i += 1) {
    tmp = getWeatherDataUrlArr(data[i].cities, data[i].country);
    arr = arr.concat([...tmp]);
  }

  let res = [];
  try {
    res = await Promise.all(
      arr.map(url => fetch(url).then(resp => resp.text()))
    );
  } catch (err) {
    console.log(err);
    return res;
  }

  return res;
}
