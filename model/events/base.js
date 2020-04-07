const _ = require('lodash')

class Event {
  before(handler) {
    handler.setCurrentEvent(this.getEventName())
    handler.notify('stats-update')
  }

  async run(handler, customer) {
    throw new Error('run(): not implemented')
  }

  after(handler) {
    handler.notify('stats-update')
  }

  async execute(handler, customer) {
    this.before(handler)
    await this.run(handler, customer)
    this.after(handler)
  }

  getEventName() {
    return _.kebabCase(this.constructor.name)
  }
}

module.exports = Event