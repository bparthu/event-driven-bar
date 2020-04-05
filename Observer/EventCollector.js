const EventEmitter = require('events')
const Observer = require('./Observer')
const Queue = require('../model/EvictingQ')

class EventCollector extends EventEmitter {
  constructor(observer) {
    super()
    this.observer = observer
    this.customerMap = {}
  }

  startListeners() {
    this.observer.on('stats-update', (bar) => {
      this.emit('notification', bar)
    })
  }

  getStats() {
    return this.stats
  }
}

module.exports = EventCollector