const { app, Menu } = require('electron')

const ControlWindow = require('./ControlWindow.js')

function App() {
  const win = require('./CreateWindow.js')
  const tray = require('./Tray.js')

  const { toggle } = ControlWindow(win, tray)

  tray.on('click', toggle)


  // Encerramento do app
  
  function getMenu() {
    return Menu.buildFromTemplate([
      {
        label: "Encerrar",
        click() {
          app.quit()
        }
      }
    ])
  }

  tray.on('right-click', () => {
    tray.popUpContextMenu(getMenu())
  })

}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
