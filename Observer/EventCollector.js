const EventEmitter = require('events')

class EventCollector extends EventEmitter {
  #observers = []
  constructor() {
    super()
  }

  addObserver(observer) {
    this.#observers.push(observer)
  }

  startListeners() {
    for(const observer of this.#observers) {
      observer.on('stats-update', (ctx) => {
        this.emit('notification', ctx)
      })
    }
  }
}

module.exports = EventCollector