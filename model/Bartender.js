const Queue = require('./Queue')
const EventEmitter = require('events')

class Bartender extends EventEmitter {
  #requests
  constructor(capacity) {
    super()
    this.#requests = new Queue(capacity)
  }

  emit(eventName, ...params) {
    super.emit(eventName, ...params)
  }
}

module.exports = Bartender