var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=623a2f4b7e2a876a574c6bf6f2b5137c';

// api key:  623a2f4b7e2a876a574c6bf6f2b5137c
// url:  http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=623a2f4b7e2a876a574c6bf6f2b5137c

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);

      // return axios.get(requestUrl).then(function (res) {
      // if (res.data.cod && res.data.message) {   // handle edge case errors from OpenWeather
      //   throw new Error(res.data.message);
      // } else {
      //   return res.data.main.temp;
      // }
      // }, function (res) {
      // throw new Error(res.data.message);
      // });
      return axios.get(requestUrl).then(function (res) {
        console.log(res);
        // if (res.data.cod && res.data.message) {   // handle edge case errors from OpenWeather
        //   throw new Error(res.data.message);      // this doesn't work
        // } else {
          return res.data.main.temp;
        // }
      })
      .catch(function (error) {
        alert("Hey!  " + error);
        // console.log("Hey!" + error);
        // console.log(res.data.message);
      });
    }
  }
