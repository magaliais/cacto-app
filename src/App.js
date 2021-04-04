import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'

const App = {

  buttonDrink: document.getElementById("button-drink"),
  timerClock: document.getElementById("timer-clock"),

  async start() {
    App.buttonDrink.addEventListener("click", App.start)
    await Notifyer.init()
    const time = 60 * 60
    Timer.init(time)

  },
    
}

export { App }