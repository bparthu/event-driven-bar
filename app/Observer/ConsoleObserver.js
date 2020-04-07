const Observer = require('./Observer')

class ConsoleObserver extends Observer {
  constructor(id) {
    super(id)
  }

  getListeners() {
    return {
      'stats-update': (ctx) => {
        this.emit('notification', this, ctx)
      }
    }
  }
}

module.exports = ConsoleObserver