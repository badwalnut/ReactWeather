var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//     <div>
//       <h2>Nav Component</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//       <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//       <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//     </div>
//
//     );
//   }
// });

// refactored as a stateless functional component:
// it only defines a render function and it doesn't maintain any state

var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};

module.exports = Nav;
