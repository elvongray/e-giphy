var BrowserWindow = require('browser-window');
var menubar = require('menubar');

mbar = menubar({
  dir           : __dirname + '/app',
  preloadWindow : true,
  width         : 500,
  height        : 600,
  resizable     : false
})

require('crash-reporter').start();

var debug = process.env.NODE_ENV === 'development';


mbar.on('ready', function() {

  mbar.window.setSize(500, 600);
  mbar.window.loadUrl('file://' + __dirname + '/app/index.html');

  if(debug) {
    debugWindow = new BrowserWindow({width: 1360, height: 600});
    debugWindow.openDevTools();
    debugWindow.loadUrl('file://' + __dirname + '/app/index.html');
  }

});

/*
* Send event to load giphys when
* menu is shown
*/
mbar.on('show', function() {
  var webContents = mbar.window.webContents;
  webContents.send('message', 'load-giphys');
})