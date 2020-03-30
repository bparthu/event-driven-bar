const _ = require('lodash')
const eventBus = require('../EventBus')

class Event {
  constructor(bar, bartender, observers) {
    this.bar = bar
    this.bartender = bartender
  }

  before(handler, customer) {
    this.track(handler, customer)
  }

  async run(handler, customer) {

  }

  after() {
    this.bar.notifyAll()
  }

  async execute(handler, customer) {
    this.before(handler, customer)
    await this.run(handler, customer)
    this.after(handler, customer)
  }

  track(handler, customer) {
    if(!customer)
      customer = handler
    //console.log(`Event: ${handler.constructor.name} is handling ${this.getEventName()} for ${customer.getName()}`)
  }

  getEventName() {
    return _.kebabCase(this.constructor.name)
  }
}

module.exports = Event