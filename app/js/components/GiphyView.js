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

  // Bubble show snackbar event to the parent
  showSnackBar: function() {
    this.props.showSnackBar();
  },

  render: function() {
    /*
    * Check if the giphys are ready. If not show spinner
    * else show giphys
    */
    var gifs = [],
        showSpinner,
        self = this;

    if(!this.props.giphys.length) {
      showSpinner = ""
    }
    else {
      showSpinner = "show-div"
      gifs = this.props.giphys.map(function(gif, index) {
        return (
          <div className="grid-item" key={'giphy-' + index}>
            <Giphy src={gif.images} showSnackBar={self.showSnackBar}/>
          </div>
        )
      });
    }

    // TODO: This is bad, find a better way!
    setTimeout(function() {
      this.addMasonryLayout()
    }.bind(this), 500);

    return (
      <div className="mdl-cell mdl-cell--12-col giphy-view">
        <div className="help-text">
          <span>CLICK ON IMAGE TO COPY LINK TO CLIPBOARD</span>
        </div>
        <div className={"load8 " + showSpinner}>
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
