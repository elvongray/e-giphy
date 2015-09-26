var React = require('react');
var Masonry = require('masonry-layout')
require('../../css/style.css');

var GiphyView = React.createClass({

  componentDidMount: function() {
    var elem = React.findDOMNode(this);
    var msnry = new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 10,
      gutter: 30
    })
  },

  render: function() {

    return (
      <div className="grid">
        <div className="grid-item"></div>
        <div className="grid-item grid-ite--width2 grid-item--height2"></div>
        <div className="grid-item grid-item--height3"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item grid-item--width3"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item grid-item--width2 grid-item--height3"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--width2 grid-item--height2"></div>
        <div className="grid-item grid-item--width2"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height3"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
      </div>
    );
  }
});

module.exports = GiphyView;
