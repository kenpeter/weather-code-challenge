/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterComponent from '../../components/FooterComponent';

class FooterContainer extends Component {
  render() {
    const { loading } = this.props;
    return loading === true ? '' : <FooterComponent />;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.weatherDataReducer.loading
  };
};

export default connect(mapStateToProps)(FooterContainer);
