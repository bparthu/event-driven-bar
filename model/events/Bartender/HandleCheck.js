const _ = require('lodash')
const Event = require('../base')

class HandleCheck extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    // produces 'exit-from-seat' event on bar
    this.bar.removeCustomerFromSeating(target)
    this.bar.incrementSuccessCount()
    const customer = this.bar.getNextWaitingCustomer()
    if(customer) {
      this.bar.getBartender().emit('customer-waiting', customer)
    }
  }
}

module.exports = HandleCheck