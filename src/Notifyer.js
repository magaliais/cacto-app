const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    
    if(permission != "granted") {
      throw new Error('É necessário permitir as notificações para que esta aplicação funcione')
    }
  },

  notify({title, body, icon}) {

    new Audio('../public/notification.mp3').play();

    new Notification(title, {
      icon: icon,
      body: body,
      silent: true,
    })

  },
}

export { Notifyer }