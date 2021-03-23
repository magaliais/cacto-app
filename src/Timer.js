import { Notifyer } from './Notifyer.js'
import { View } from './View.js'
import { App } from './App.js'

const Timer = {
  time: Number,     // alterar para um 'time' dinâmico
  currentTime: 0,

  interval: null,

  timeToMinutes(time) {
    return Math.floor(time / 60)
  },

  timeToSeconds(time) {
    return time % 60
  },

  formatTime(time) {
    return String(time).padStart(2, '0')
  },

  init(time) {
    Timer.time = time || 60 * 60
    Timer.currentTime = Timer.time

    App.buttonDrink.setAttribute("disabled", true);

    // setInterval precisa de 2 argumentos
    // a1 -> Uma função que será executada a cada tempo
    // a2 -> Intervalo em milissegundos
    Timer.interval = setInterval(Timer.countdown, 1000)

  },

  countdown() {
    Timer.currentTime--;

    View.render({
      minutes: Timer.formatTime(Timer.timeToMinutes(Timer.currentTime)),
      seconds: Timer.formatTime(Timer.timeToSeconds(Timer.currentTime)),
    })

    if(Timer.currentTime == 0) {
      clearInterval(Timer.interval)
      Notifyer.notify({
        title: "Hora de se hidratar",
        body: "Tá na hora de beber uma aguinha, parceiro!",
        icon: '../public/cactus.png'
      });
      App.buttonDrink.removeAttribute("disabled")
      
      View.render({
        minutes: Timer.formatTime(Timer.timeToMinutes(Timer.time)),
        seconds: Timer.formatTime(Timer.timeToSeconds(Timer.time)),
      })
      return;
    }

  },

}

export { Timer }