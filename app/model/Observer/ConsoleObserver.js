const Observer = require('./Base')

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