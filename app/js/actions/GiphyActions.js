var AppDispatcher = require('../dispatcher/AppDispatcher');
var giphy = require('giphy-api')();

//Note: Find a better way of handling this issue.
//This state holder is supposed to be cleared after a period
var loadedGiphys = [];

var GiphyActions = {

  loadTrendingGiphys: function() {

    var action = function(payload) {
      return {
        actionType: "LOAD_TRENDING_GIPHYS",
        data: payload
      }
    }

    if(loadedGiphys.length === 0) {
      giphy.trending({
        limit: 25,
        rating: 'g',
        fmt: 'json'
      },function(err, res) {
        loadedGiphys = res.data;
        AppDispatcher.dispatch(action(res.data));
      });
    }
    else {
      AppDispatcher.dispatch(action(loadedGiphys));
    }
  }
}

module.exports = GiphyActions;
