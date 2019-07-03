/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './index.scss';

const BodyComponent = ({ data }) => {
  if (data === undefined) {
    return <div>No data</div>;
  }

  return (
    <table className="bodyComponent">
      <caption>Current Weather</caption>
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Desc</th>
          <th scope="col">Temp</th>
          <th scope="col">Min</th>
          <th scope="col">Max</th>
          <th scope="col">Wind</th>
          <th scope="col">Humidity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const d = JSON.parse(item);

          return (
            <tr key={index}>
              <td data-label="City">{d.name}</td>
              <td data-label="Desc">{d.weather[0].main}</td>
              <td data-label="Temp">{d.main.temp}&#8451;</td>
              <td data-label="Min">{d.main.temp_min}</td>
              <td data-label="Max">{d.main.temp_max}</td>
              <td data-label="Wind">{d.wind.speed} km/h</td>
              <td data-label="Humidity">{d.main.humidity}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BodyComponent;
