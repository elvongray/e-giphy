var React = require('react');
require('../css/style.css');

var Giphy = React.createClass({

  render: function() {

    return (
      <div className="mdl-card">
        <div class="mdl-card__media">
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
});
