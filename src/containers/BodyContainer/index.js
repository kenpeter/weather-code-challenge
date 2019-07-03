/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-default */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWeatherDataAPI } from '../../reducers/weatherData';
import { default as BodyComponent } from '../../components/BodyComponent';

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { loadWeatherDataAPIProps } = this.props;

    loadWeatherDataAPIProps();
  }

  render() {
    return <BodyComponent />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  loadWeatherDataAPIProps: () => dispatch(loadWeatherDataAPI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer);
