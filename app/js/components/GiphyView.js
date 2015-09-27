var React = require('react');
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');
var Giphy = require('./Giphy');
require('../../css/style.css');

var GiphyView = React.createClass({

  addMasonryLayout: function() {
    imagesLoaded('.giphy-view', function() {
      console.log("called again again");
      var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 30
      });
    });
  },

  render: function() {

    if(!this.props.giphys.length) {
      return (
        <div className="load8">
          <div className="loader">Loading...</div>
        </div>
      );
    }
    else {
      var gifs = this.props.giphys.map(function(gif, index) {
        return (
          <div className="grid-item" key={'giphy-' + index}>
            <Giphy src={gif.images.fixed_height.url}/>
          </div>
        )
      });
      this.addMasonryLayout();
      return (
        <div className="grid">
          {gifs}
        </div>
      );
    }
  }
});

module.exports = GiphyView;
