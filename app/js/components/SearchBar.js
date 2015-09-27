var React = require('react');
require('../../css/style.css');

var SearchBar = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.handleSearch(this.refs.search);
  },

  render: function() {

    return (
      <form className="mdl-grid search-contents" onSubmit={this.handleSubmit}>
        <input
          ref="search"
          type="text"
          className="search-input"
          placeholder="Search for Gifs"
        />
        <input
          type="image"
          className="search-button"
          src="../app/assets/search.png"
        />
      </form>
    );
  }
});

module.exports = SearchBar;
