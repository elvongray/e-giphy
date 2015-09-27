var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var giphys = [];

var GiphyStore = assign({}, EventEmitter.prototype, {

  emitLoadGiphys: function() {
    this.emit('load_giphys');
  },

  addLoadGiphysListener: function(callback) {
    this.on('load_giphys', callback);
  },

  getGiphys: function() {
    return giphys;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

      case "LOAD_TRENDING_GIPHYS":
        giphys = action.data;
        GiphyStore.emitLoadGiphys();
        break;

      case "LOAD_SEARCHED_GIPHYS":
        giphys = action.data;
        GiphyStore.emitLoadGiphys();
        break;

      default:
        console.log("error");
  }
});

module.exports = GiphyStore;
