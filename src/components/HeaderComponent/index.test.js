/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HeaderComponent from './index';

configure({ adapter: new Adapter() });

describe('Test <HeaderComponent />', () => {
  it('<HeaderComponent /> has class headerComponent', () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.hasClass('headerComponent')).toEqual(true);
  });
});
