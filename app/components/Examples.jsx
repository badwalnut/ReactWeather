var React = require('react');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

// refactored as a stateless functional component:
// it only defines a render function and it doesn't maintain any state

var Examples = (props) => {
  return (
    <h3>Examples Component!</h3>
  );
};

module.exports = Examples;
