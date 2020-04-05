const EventEmitter = require('events')

class EventCollector extends EventEmitter {
  constructor(observer) {
    super()
    this.observer = observer
    this.customerMap = {}
  }

  startListeners() {
    this.observer.on('stats-update', (ctx) => {
      this.emit('notification', ctx)
    })
  }

  getStats() {
    return this.stats
  }
}

module.exports = EventCollector