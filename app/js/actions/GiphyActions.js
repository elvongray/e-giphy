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
        limit: 50,
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
  },

  searchForRequestedGiphys: function(searchTerm) {

     var action = function(payload) {
      return {
        actionType: "LOAD_SEARCHED_GIPHYS",
        data: payload
      }
    }

    giphy.search({
      q: searchTerm,
      limit: 50,
      rating: 'g',
      fmt: 'json'
    },function(err, res) {
      if(!res.data.length) {
        AppDispatcher.dispatch({actionType: "GIPHY_NOT_FOUND"});
      }
      else {
        loadedGiphys = [];
        AppDispatcher.dispatch(action(res.data));
      }
    });
  },

  showConnectionError: function() {
    var action =  {
      actionType: "NO_INTERNET_CONNECTION"
    }
    AppDispatcher.dispatch(action);
  }
}

module.exports = GiphyActions;
