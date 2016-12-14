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
    </div>
  )
};


module.exports = About;
