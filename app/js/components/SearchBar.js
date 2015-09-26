var React = require('react');
require('../../css/style.css');

var SearchBar = React.createClass({

  render: function() {

    return (
      <div class="search-bar">
        <input type="text" placeholder="Search for Gifs"/>
        <span> </span>
      </div>
    );
  }
});

module.exports = SearchBar;
