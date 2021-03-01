import { Notifyer } from './Notifyer.js'

const App = {
  async start() {

    try {
      await Notifyer.init();
      Notifyer.notify({
        title: "Vai se hidratar, seu cacto!",
        body: "Hora de beber um pouco de água, parceiro",
        icon: "../public/cactus.svg"
      });
    } catch (error) {
      alert(error.message)
    }
    
  }
}

export { App }