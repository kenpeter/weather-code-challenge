# Coding exercise

Use `Create-React-App` to build a weather app, displaying the current weather conditions of Australia's major capital cities.

### Prerequisites

Assume you are running Mac. Make sure the following are installed.

Install brew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install git

```
$ brew install git
```

Install node and npm together

```
$ brew install node
```

See deployment for notes on how to deploy the project on a live system.

## Getting Started

git clone this project to your machine

```
$ git clone https://github.com/kenpeter/weather-code-challenge
```

### Installing

Inside the root of project, install all dependencies.

```
$ npm install
```

To launch this app, do following

```
$ npm start
```

App should automatically running in a new tab of your browser. If it is not starting, makre sure port `3000` is not used by other apps.

## Code exercise equirements

### Tech stack I am using

- React
- Redux
- SCSS
- API call to https://openweathermap.org/current
- Create-React-App CLI

### App itself

- Able to retrieve data from API: https://openweathermap.org/current
- Display data: city (with country), weather description, temperature, conditions like
  min/max temperature, wind speed and humidity.

### Best coding practices

- Eslint to lint existing code.
- Unit testing to UI component and utility functions.
- Having component and container in separate folders.
- Data (data.json) and config (config.json) are sitting in its own folders.
- Each UI component has front end code + style + test cases.

### Scalability

- data.json is allowed to hold mutiple countries and cities. It is easy to add
  more countries and cities by modifying data.json
- config.json has API key and URL. It is easy to change end point.
- The front end is able to display city along with country it belongs.

### Reliability

- When data is coming to the app. Loading screen is displayed, which indicates rendering progress.
- Where there is no data, the app indicates to users as well.
- Test cases are passed fully.

### Reusability

- It has different UI components to be resued.
- helper.js contains functions that can be used anywhere in the app.

### Responsive

- Using media query, the table layout is responsive at 600px.

### Performance

This is the old code. It allows mutiple fetching api at the same time, which speeds
things up.

```
  let res = [];
  try {
    res = await Promise.all(
      arr.map(url => fetch(url).then(resp => resp.text()))
    );
  } catch (err) {
    console.log(err);
    return res;
  }
```

This is the current code. It uses async/await to do 1 thing at a time. It allows me
to inject country into existing data, then display it (Scalability). In the future, I will
think about how to do async tasks inside loops, to speed things up.

```
export async function getWeatherData() {
  const data = require('../data/data.json');
  const res = [];

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].cities.length; j += 1) {
      const url = getWeatherDataUrl(data[i].cities[j], data[i].country);
      const fetchRes = await fetch(url);
      const jsonData = await fetchRes.json();
      jsonData.country = data[i].country;
      res.push(jsonData);
    }
  }
  return res;
}
```

For further thinking, the API has option to `Call for several city IDs (limit of locations is 20)`. One thing we can do is that in a loop, one pagination (which contains 20 cities) to call the api. The next iternation, we do the same thing. This will speed things up.

## Running the tests

To run tests

```
$ npm test
```

### Break down tests
Test api call to https://api.openweathermap.org
```
api/weatherData.test.js
```

Test BodyComponent to render data in a table layout
```
BodyComponent/index.test.js
```

Test MainComponent, which contains the bodyContainer
```
MainComponent/index.test.js
```

Test helper to construct an api url
```
helper/helper.test.js
```

Test App to render itself
```
src/App.test.js
```

## Deployment

Compile javascript and make it ready to be served

```
$ npm run build
```

Now serve it and view it browser

```
$ npm install -g serve
$ serve -s build
```

It is served at port 5000. Can be viewed via http://localhost:5000

## About this readme

This readme is based on this good [template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).

## Authors

- [Kenpeter](https://github.com/kenpeter)