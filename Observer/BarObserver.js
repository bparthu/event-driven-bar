const EventEmitter = require('events')

class BarObserver extends EventEmitter {
  constructor() {
    super()
  }

  on(eventName, cb) {
    super.on(eventName, cb)
  }
}

module.exports = BarObserver