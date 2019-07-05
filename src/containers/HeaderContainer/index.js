/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';

class HeaderContainer extends Component {
  render() {
    const { loading } = this.props;
    return loading === true ? '' : <HeaderComponent />;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.weatherDataReducer.loading
  };
};

export default connect(mapStateToProps)(HeaderContainer);
