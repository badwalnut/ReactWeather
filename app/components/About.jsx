var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// refactored as a stateless functional component:
// it only defines a render function and it doesn't maintain any state

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>React Weather</p>
      <p>An app created as a tool for learning React.js</p>
      <p>Gets current temperature for queried city</p>
      <p></p>
      <p>Some of the tools used were:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map was used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};


module.exports = About;
