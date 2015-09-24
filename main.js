var BrowserWindow = require('browser-window');
var menubar = require('menubar');

mbar = menubar({
  dir           : __dirname + '/app',
  preloadWindow : true,
  width         : 400,
  height        : 500,
  resizable     : false
})

require('crash-reporter').start();

var debug = process.env.NODE_ENV === 'development';


mbar.on('ready', function() {

  mbar.window.setSize(320, 500)
  mbar.window.setMaximumSize(320, 600)
  mbar.window.setMinimumSize(320, 400)
  mbar.window.setResizable(true)
  mbar.window.loadUrl('file://' + __dirname + '/app/index.html')

  if(debug) {
    debugWindow = new BrowserWindow({width: 1360, height: 800});
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