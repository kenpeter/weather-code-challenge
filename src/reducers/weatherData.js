import { getWeatherData } from '../api/weatherData';

export const START_LOAD_WEATHER_DATA = 'app/weather/START_LOAD_WEATHER_DATA';
export const LOAD_WEATHER_DATA_SUCCESS =
  'app/weather/LOAD_WEATHER_DATA_SUCCESS';
export const LOAD_WEATHER_DATA_FAIL = 'app/weather/LOAD_WEATHER_DATA_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const weatherDataReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_WEATHER_DATA:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_WEATHER_DATA_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadWeatherData = () => {
  return {
    type: START_LOAD_WEATHER_DATA,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadWeatherDataSuccess = data => {
  return {
    type: LOAD_WEATHER_DATA_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadWeatherDataFail = errors => {
  return {
    type: LOAD_WEATHER_DATA_FAIL,
    data: [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadWeatherDataAPI = () => {
  return dispatch => {
    dispatch(startLoadWeatherData());

    getWeatherData()
      .then(res => {
        const data = res;
        dispatch(loadWeatherDataSuccess(data));
      })
      .catch(err => {
        loadWeatherDataFail(err);
      });
  };
};
