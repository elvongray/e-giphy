var React = require('react');
require('../../css/style.css');

var Giphy = React.createClass({

  render: function() {

    return (
      <img src={this.props.src} alt="" className="giphy-image"/>
    );
  }
});

module.exports = Giphy;
