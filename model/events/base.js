const _ = require('lodash')
const eventBus = require('../EventBus')

class Event {
  constructor() {

  }

  before(handler) {
    handler.notifyEvents(this.getEventName())
    this.track(handler)
  }

  async run(handler, customer) {

  }

  after(handler, customer) {
    handler.notifyStatUpdates(handler)
  }

  async execute(handler, customer) {
    this.before(handler, customer)
    await this.run(handler, customer)
    this.after(handler, customer)
  }

  getDescription(handler, customer) {
    console.log(`customer name: ${customer.getName()} - ${handler.constructor.name} - ${this.getEventName()}`)
  }

  track(handler, customer) {
    if(!customer)
      customer = handler
    //this.getDescription(handler, customer)
  }

  getEventName() {
    return _.kebabCase(this.constructor.name)
  }
}

module.exports = Event