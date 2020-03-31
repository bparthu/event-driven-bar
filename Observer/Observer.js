const EventEmitter = require('events')

class Observer extends EventEmitter {
  constructor() {
    super()
  }

  on(eventName, cb) {
    super.on(eventName, cb)
  }
}

module.exports = Observer