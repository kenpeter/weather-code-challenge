/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWeatherDataAPI } from '../../reducers/weatherData';
import { default as BodyComponent } from '../../components/BodyComponent';

class BodyContainer extends Component {
  componentDidMount() {
    const { loadWeatherDataAPIProps } = this.props;
    loadWeatherDataAPIProps();
  }

  render() {
    const { data } = this.props;
    return data.length === 0 ? (
      <p>Loading....</p>
    ) : (
      <BodyComponent data={data} />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.weatherDataReducer.data,
    loading: state.weatherDataReducer.loading
  };
};

const mapDispatchToProps = dispatch => ({
  loadWeatherDataAPIProps: () => dispatch(loadWeatherDataAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer);
