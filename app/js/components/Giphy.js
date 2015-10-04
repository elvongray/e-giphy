var React = require('react');
var clipboard = window.require('clipboard');
require('../../css/style.css');

var Giphy = React.createClass({

  copyLinkToCliboard: function() {
    clipboard.writeText(this.props.src.original.url);
    this.props.showSnackBar();
  },

  render: function() {

    return (
      <img
        src={this.props.src.fixed_height_downsampled.url}
        onClick={this.copyLinkToCliboard}
        className="giphy-image"/>
    );
  }
});

module.exports = Giphy;
