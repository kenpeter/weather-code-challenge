/* eslint-disable no-undef */
import { getWeatherData } from './weatherData';

jest.setTimeout(20000);

describe('Test getWeatherData api', () => {
  it('getWeatherData returns all data', async () => {
    const res = await getWeatherData();
    expect(res[0].name).toBe('Sydney');
  });
});
