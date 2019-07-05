/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import BodyContainer from '../../containers/BodyContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import FooterContainer from '../../containers/FooterContainer';

const MainComponent = () => {
  return (
    <div className="mainComponent">
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer />
    </div>
  );
};

export default MainComponent;
