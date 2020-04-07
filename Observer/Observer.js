const EventEmitter = require('events')

class Observer extends EventEmitter {
  #observer
  constructor(observer) {
    super()
    this.#observer = observer
  }

  getListeners() {
    throw new Error('getListeners() not implemented')
  }

  startListeners() {
    let listeners = this.getListeners()
    for(const eventName in listeners) {
      this.#observer.on(eventName, listeners[eventName])
    }
  }
}

module.exports = Observer