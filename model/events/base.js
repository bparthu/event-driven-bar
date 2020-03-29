const _ = require('lodash')
const eventBus = require('../EventBus')

class Event {
  constructor(bar, bartender) {
    this.bar = bar
    this.bartender = bartender
  }

  before(handler, target) {
    this.track(handler, target)
  }

  run(target) {

  }

  after() {

  }

  async execute(handler, target) {
    this.before(handler, target)
    await this.run(target)
    this.after(handler, target)
  }

  track(handler, target) {
    console.log(`Event: ${handler.constructor.name} is handling ${this.getEventName()} for ${target.getName()}`)
  }

  getEventName() {
    return _.kebabCase(this.constructor.name)
  }
}

module.exports = Event