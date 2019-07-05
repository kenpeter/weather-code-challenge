/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import BodyComponent from './index';
import { getWeatherData } from '../../api/weatherData';

configure({ adapter: new Adapter() });
jest.setTimeout(20000);

describe('Test BodyComponent', () => {
  it('<BodyComponent/> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodyComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<BodyComponent /> has noData class', () => {
    const wrapper = shallow(<BodyComponent />);
    expect(wrapper.find('.noData').exists()).toEqual(true);
  });

  it('<BodyComponent /> has bodyComponent class', async () => {
    const data = await getWeatherData();
    const wrapper = shallow(<BodyComponent data={data} />);
    expect(
      wrapper.containsMatchingElement(<td data-label="City">Canberra (AU)</td>)
    ).toBeTruthy();
  });
});
