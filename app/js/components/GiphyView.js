var React = require('react');
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');
var Giphy = require('./Giphy');
require('../../css/style.css');

var GiphyView = React.createClass({

  addMasonryLayout: function() {
    console.log("called again again");
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 10,
      gutter: 30
    });

    imagesLoaded('.giphy-view', function() {
      msnry.layout();
    });
  },

  render: function() {
    /*
    * Check if the giphys are ready. If not show spinner
    * else show giphys
    */
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
            <Giphy src={gif.images}/>
          </div>
        )
      });

      //This is bad, find a better way
      setTimeout(function() {
        this.addMasonryLayout()
      }.bind(this), 1000);

      return (
        <div className="grid">
          {gifs}
        </div>
      );
    }
  }
});

module.exports = GiphyView;
