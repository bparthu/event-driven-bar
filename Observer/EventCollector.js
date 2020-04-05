const EventEmitter = require('events')
const Observer = require('./Observer')
const Queue = require('../model/EvictingQ')

class EventCollector extends EventEmitter {
  constructor(observer) {
    super()
    this.observer = observer
    this.handlers = {}
  }

  startListeners() {
    this.observer.on('event', (eventName) => {
      this.emit('notification', this)
    })

    this.observer.on('stats-update', (handler) => {
      this.handlers[handler.constructor.name] = handler
      this.emit('notification', this)
    })
  }

  getStats() {
    return this.stats
  }
}

module.exports = EventCollector