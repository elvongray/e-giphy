var React = require('react');
var GiphyStore = require('./stores/GiphyStore');

var GiphyView = require('./components/GiphyView');
var SearchBar = require('./components/SearchBar');
var GiphyActions = require('./actions/GiphyActions');

var ipc = window.require('ipc');
require('../css/style.css');

var EGiphy = React.createClass({

  getInitialState: function() {
    return {
      giphys: []
    }
  },

  loadGiphys: function() {
    this.setState({
      giphys:GiphyStore.getGiphys()
    });
  },

  handleSubmit: function(refs) {
    var searchValue = React.findDOMNode(refs).value;
    console.log(searchValue);
    if(/^\w+\s*\w+$/.test(searchValue)) {
      this.setState({giphys: []});
      GiphyActions.searchForRequestedGiphys(React.findDOMNode(refs).value);
    }
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
                  <div className="help-text">
                    <span>CLICK ON IMAGE TO COPY LINK TO CLIPBOARD</span>
                  </div>
                  <GiphyView giphys={this.state.giphys} />
                </div>
                <div className="mdl-cell mdl-cell--12-col search-bar">
                  <SearchBar handleSearch={this.handleSubmit}/>
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

React.render(<EGiphy />, document.getElementById('giphy'));
