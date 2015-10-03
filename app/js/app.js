var ipc = window.require('ipc');
var isOnline = window.require('is-online');

var React = require('react');

var GiphyStore = require('./stores/GiphyStore');
var GiphyView = require('./components/GiphyView');
var SearchBar = require('./components/SearchBar');
var GiphyActions = require('./actions/GiphyActions');

require('../css/style.css');

var EGiphy = React.createClass({

  getInitialState: function() {
    return {
      giphys: [],
      connection: true
    }
  },

  loadGiphys: function() {
    this.setState({
      giphys:GiphyStore.getGiphys(),
      connection: true
    });
  },

  noConnection: function() {
    this.setState({
      connection: false
    });
  },

  handleSubmit: function(refs) {
    var searchValue = React.findDOMNode(refs).value;
    if(/^\s*[A-Za-z]+(?:\s+[A-Za-z]+)*\s*$/.test(searchValue)) {
      this.setState({giphys: []});
      GiphyActions.searchForRequestedGiphys(searchValue);
    }
  },

  componentDidMount: function() {
    GiphyStore.addLoadGiphysListener(this.loadGiphys);
    GiphyStore.addNoConnectionListener(this.noConnection);
  },

  render: function() {
    var display;
    // Check if the is internet connection, if not show
    // error message, if connection load giphys
    if(this.state.connection) {
      display = <GiphyView giphys={this.state.giphys} />
    }
    else {
      display = (
        <div className="mdl-cell mdl-cell--12-col giphy-view">
          <div className="help-text">
            <span>NO INTERNET CONNECTION</span>
          </div>
        </div>
      )
    }

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
                  {display}
                <div className="mdl-cell mdl-cell--12-col search-bar">
                  <SearchBar handleSearch={this.handleSubmit}/>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div aria-live="assertive" aria-atomic="true" aria-relevant="text" className="snackbar">
        </div>
      </div>
    );
  }
})

// listen for event to load trending gipys
// when the menu is displayed
ipc.on('message', function(message) {
  if(message === 'load-giphys') {
    //check if there is internet connection
    isOnline(function(err, online) {
      if(online){
        GiphyActions.loadTrendingGiphys();
      }
      else{
        GiphyActions.showConnectionError();
      }
    });
  }
});


React.render(<EGiphy />, document.getElementById('giphy'));
