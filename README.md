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
brew install git
```

Install node and npm together

```
brew install node
```

See deployment for notes on how to deploy the project on a live system.

## Getting Started

git clone this project to your machine

```
git clone https://github.com/kenpeter/weather-code-challenge
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

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Authors

- [Kenpeter](https://github.com/kenpeter)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
