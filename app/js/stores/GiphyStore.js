var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var giphys = [];

var GiphyStore = assign({}, EventEmitter.prototype, {

  emitLoadGiphys: function() {
    this.emit('load_giphys');
  },

  emitNoConnection: function() {
    this.emit('no_connection');
  },

  addLoadGiphysListener: function(callback) {
    this.on('load_giphys', callback);
  },

  addNoConnectionListener: function(callback) {
    this.on('no_connection', callback);
  },

  getGiphys: function() {
    return giphys;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
      //what the fuck is this!
      case "LOAD_TRENDING_GIPHYS":
        giphys = action.data;
        GiphyStore.emitLoadGiphys();
        break;

      case "LOAD_SEARCHED_GIPHYS":
        giphys = action.data;
        GiphyStore.emitLoadGiphys();
        break;

      case "NO_INTERNET_CONNECTION":
        GiphyStore.emitNoConnection();
        break;

      default:
        console.log("error");
  }
});

module.exports = GiphyStore;
