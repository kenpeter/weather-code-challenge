/* eslint-disable no-undef */
import { getWeatherDataUrl } from './helper';

describe('Test helper.js', () => {
  it('test getWeatherDataUrl', () => {
    const res = getWeatherDataUrl('Melbourne', 'AU');
    const expected =
      'https://api.openweathermap.org/data/2.5/weather?q=Melbourne,AU&units=metric&appid=8a7df8d3c38a9dabd895acf9eeaefded';
    expect(res).toBe(expected);
  });
});
