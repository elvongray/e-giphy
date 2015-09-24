var React = require('react');

var Giphy = React.createClass({

  render: function() {
    return <div>Checking if it changed!</div>
  }
})

React.render(<Giphy />, document.getElementById('giphy'));
