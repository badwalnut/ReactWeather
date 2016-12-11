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
    <h3>About Component</h3>
  )
};


module.exports = About;
