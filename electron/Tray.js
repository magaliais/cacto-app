const { Tray } = require("electron")
const { resolve } = require("path")

const iconPath = resolve(__dirname, '../', 'public', 'cactus.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Não sou um cacto')
  
  return tray
}

module.exports = createTray()