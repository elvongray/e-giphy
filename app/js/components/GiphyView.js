var React = require('react');
var Masonry = require('masonry-layout')
var Giphy = require('./Giphy');
require('../../css/style.css');

var GiphyView = React.createClass({

  componentDidMount: function() {
    //check if the giphy plane has been loaded
    //and apply the masonry stayle to it.
    var elem = React.findDOMNode(this);
    var msnry = new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 10,
      gutter: 30
    })
  },

  render: function() {
    console.log(this.props.giphys);
    var gif = ""
    if(this.props.giphys.length) {
      gif = this.props.giphys[0].images.fixed_height.url;
    }
    return (
      <div className="grid">
        <div className="grid-item">
          <Giphy src={gif} />
        </div>
      </div>
    );
  }
});

module.exports = GiphyView;
