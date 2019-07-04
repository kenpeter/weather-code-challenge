/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainComponent from './index';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('Test <MainComponent />', () => {
  it('<MainComponent/> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MainComponent />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<MainComponent /> has class mainComponent', () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper.hasClass('mainComponent')).toEqual(true);
  });
});
