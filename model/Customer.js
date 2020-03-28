const EventEmitter = require('events')

class Customer extends EventEmitter {
  #name
  constructor(name) {
    super()
    this.#name = name
  }

  getName() {
    return this.#name
  }

  emit(eventName, ...params) {
    super.emit(eventName, ...params)
  }
}

module.exports = Customer