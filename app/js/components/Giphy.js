var React = require('react');
var clipboard = window.require('clipboard');
require('../../css/style.css');

var Giphy = React.createClass({

  copyLikeToCliboard: function() {
    clipboard.writeText(this.props.src.original.url);
    // This is bad, find a better way.
    $('.err').stop().fadeIn(400).delay(3000).fadeOut(400);
  },

  render: function() {

    return (
      <img
        src={this.props.src.fixed_height_downsampled.url}
        onClick={this.copyLikeToCliboard}
        className="giphy-image"/>
    );
  }
});

module.exports = Giphy;
