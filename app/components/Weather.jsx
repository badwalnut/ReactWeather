var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;  // makes this keyword available inside promise function below


    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({ isLoading: false });
      alert(errorMessage);
    });
  },
  render: function () {
    // this works:
    // var location = this.state.location;
    // var temp = this.state.temp;
    // or use ES6 deconstruction syntax:
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather data...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
