
function ControlWindow(win, tray) {

  function toggle() {
    if(win.isVisible()) {
      win.hide()
    } else {
      show()
    }
  }

  function show() {
    // pegar o posicionamento da win/tray
    const position = getPosition();

    // atualizar o posicionamento da win
    win.setPosition(position.x, position.y, false)
    // mostrar a win
    win.show()
    win.focus()
    // chamar o focus / win.focus()
  }

  function getPosition() {
    const winBounds = win.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
    const y = Math.round(trayBounds.y - trayBounds.height - winBounds.height + 30)

    return {x, y}
  }


  return {
    toggle
  }
}

module.exports = ControlWindow