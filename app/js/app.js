var React = require('react');
var GiphyStore = require('./stores/GiphyStore');

var GiphyView = require('./components/GiphyView');
var SearchBar = require('./components/SearchBar');
var GiphyActions = require('./actions/GiphyActions');

var ipc = window.require('ipc');
require('../css/style.css');

var Giphy = React.createClass({

  loadGiphys: function() {
    return GiphyStore.getGiphys();
  },

  componentDidMount: function() {
    GiphyStore.addLoadGiphysListener(this.loadGiphys)
  },

  render: function() {

    return (
      <div className="mdl-layout__container">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header header-style">
            <div className="mdl-layout__header-row header-content-style">
              <span className="mdl-layout-title">
                <img src="assets/giphy.png" className="header-image"/>
              </span>
            </div>
          </header>
          <main className="mdl-layout__content">
            <div className="page-content">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col giphy-view">
                  <GiphyView giphys={this.loadGiphys} />
                </div>
                <div className="mdl-cell mdl-cell--12-col search-bar">
                  <SearchBar />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
})

ipc.on('message', function(message) {
  if(message === 'load-giphys') {
    GiphyActions.loadTrendingGiphys();
  }
});

React.render(<Giphy />, document.getElementById('giphy'));
