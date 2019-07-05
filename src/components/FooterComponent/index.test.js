/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FooterComponent from './index';

configure({ adapter: new Adapter() });

describe('Test <FooterComponent />', () => {
  it('<FooterComponent /> has class footerComponent', () => {
    const wrapper = shallow(<FooterComponent />);
    expect(wrapper.hasClass('footerComponent')).toEqual(true);
  });
});
