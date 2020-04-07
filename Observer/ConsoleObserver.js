const Observer = require('./Observer')

class ConsoleObserver extends Observer {
  constructor(observer) {
    super(observer)
  }

  getListeners() {
    return {
      'stats-update': (ctx) => {
        this.emit('notification', ctx)
      }
    }
  }
}

module.exports = ConsoleObserver