const EventEmitter = require('events')

class Observer extends EventEmitter {
  #id
  constructor(id) {
    super()
    this.#id = id
  }

  getId() {
    return this.#id
  }

  getListeners() {
    throw new Error('getListeners() not implemented')
  }

  startListeners() {
    let listeners = this.getListeners()
    for(const eventName in listeners) {
      this.on(eventName, listeners[eventName])
    }
  }
}

module.exports = Observer