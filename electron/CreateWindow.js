const { BrowserWindow } = require("electron/main")


function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 350,
    show: false,
    resizable: false,
    fullscreenable: false,
    frame: false,
    icon: './public/cactus.png',
    webPreferences: {
      nodeIntegration: true,
    }
  })
  win.setMenuBarVisibility(false)

  win.loadFile('index.html')

  return win
}

module.exports = createWindow()