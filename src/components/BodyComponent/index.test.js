/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import BodyComponent from './index';

configure({ adapter: new Adapter() });

describe('Test BodyComponent', () => {
  it('BodyComponent renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodyComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<BodyComponent />);

    console.log(wrapper);
  });
});
