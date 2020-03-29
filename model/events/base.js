const _ = require('lodash')
const eventBus = require('../EventBus')

class Event {
  constructor(bar, bartender) {
    this.bar = bar
    this.bartender = bartender
  }

  before(handler, customer) {
    this.track(handler, customer)
  }

  run(customer) {

  }

  after() {

  }

  async execute(handler, customer) {
    this.before(handler, customer)
    await this.run(customer)
    this.after(handler, customer)
  }

  track(handler, customer) {
    console.log(`Event: ${handler.constructor.name} is handling ${this.getEventName()} for ${customer.getName()}`)
  }

  getEventName() {
    return _.kebabCase(this.constructor.name)
  }
}

module.exports = Event