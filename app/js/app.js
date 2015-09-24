var React = require('react');
var ipc = window.require('ipc');

var Giphy = React.createClass({
  componentWillMount: function() {
    console.log(ipc);
  },
  render: function() {
    return <div>Is it still working</div>
  }
})

ipc.on('message', function(message) {
});

React.render(<Giphy />, document.getElementById('giphy'));
