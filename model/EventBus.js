const _ = require('lodash')

class EventBus {
  constructor() {
    this.emitters = {}
  }

  registerEmitter(emitter) {
    this.emitters[_.toLower(emitter.constructor.name)] = emitter
  }

  listEmitters() {
    return this.emitters
  }
}

let instance = new EventBus()

module.exports = instance