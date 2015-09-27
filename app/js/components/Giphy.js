var React = require('react');
var clipboard = window.require('clipboard');
require('../../css/style.css');

var Giphy = React.createClass({

  copyLikeToCliboard: function() {
    clipboard.writeText(this.props.src.original.url);
  },

  render: function() {

    return (
      <img src={this.props.src.fixed_height_downsampled.url} onClick={this.copyLikeToCliboard} className="giphy-image"/>
    );
  }
});

module.exports = Giphy;
