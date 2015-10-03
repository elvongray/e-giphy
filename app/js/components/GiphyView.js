var React = require('react');
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');
var Giphy = require('./Giphy');
require('../../css/style.css');

var GiphyView = React.createClass({

  addMasonryLayout: function() {
    var elem = document.querySelector('.grid');
    var msnry

    imagesLoaded('.giphy-view', function() {
      msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: 10,
        gutter: 30
      });
    });
  },

  showSnackBar: function() {
    this.props.showSnackBar();
  },

  render: function() {
    /*
    * Check if the giphys are ready. If not show spinner
    * else show giphys
    */
    var gifs = [],
        showDiv
        self = this;

    if(!this.props.giphys.length) {
      showDiv = ""
    }
    else {
      showDiv = "show-div"
      gifs = this.props.giphys.map(function(gif, index) {
        return (
          <div className="grid-item" key={'giphy-' + index}>
            <Giphy src={gif.images} showSnackBar={self.showSnackBar}/>
          </div>
        )
      });
    }

    //This is bad, find a better way!
    setTimeout(function() {
      this.addMasonryLayout()
    }.bind(this), 500);

    return (
      <div className="mdl-cell mdl-cell--12-col giphy-view">
        <div className="help-text">
          <span>CLICK ON IMAGE TO COPY LINK TO CLIPBOARD</span>
        </div>
        <div className={"load8 " + showDiv}>
          <div className="loader">Loading...</div>
        </div>
        <div className="grid">
          {gifs}
        </div>
      </div>
    );
  }
});

module.exports = GiphyView;
