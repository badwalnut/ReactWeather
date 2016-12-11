var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // this works:
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     // or use ES6 deconstruction syntax:
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h3>It's {temp} in {location}.</h3>
//       </div>
//     );
//   }
// });

// refactored as a stateless functional component:
// it only defines a render function and it doesn't maintain any state

// var WeatherMessage = (props) => {
//     return (
//       <div>
//         <h3>It's {props.temp} in {props.location}.</h3>
//       </div>
//   )
// };

// above seems to work...
// instructor did this:

// var WeatherMessage = (props) => {
// //    var {temp, location} = props;
//     var {location, temp} = props; // both this and above line works; defined in weather.jsx
//     return (
//       <div>
//         <h3>It's {temp} in {location}.</h3>
//       </div>
//   )
// };

//...which also works and probably makes more sense and is more descriptive

//this also works and is more concise:

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h3>It's {temp} in {location}.</h3>
      </div>
  )
};

module.exports = WeatherMessage;
