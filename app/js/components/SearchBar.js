var React = require('react');
require('../../css/style.css');

var SearchBar = React.createClass({

  render: function() {

    return (
      <div className="mdl-grid search-contents">
        <input type="text" className="search-input" placeholder="Search for Gifs"/>
        <input type="image" className="search-button" src="../app/assets/search.png" />
      </div>
    );
  }
});

module.exports = SearchBar;
