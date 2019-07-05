/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BodyContainer from '../../containers/BodyContainer';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

const MainComponent = () => {
  return (
    <div className="mainComponent">
      <HeaderComponent />
      <BodyContainer />
      <FooterComponent />
    </div>
  );
};

export default MainComponent;
