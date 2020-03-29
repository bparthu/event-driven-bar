const _ = require('lodash')
const Event = require('../base')

class HandleCheck extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    // produces 'exit-from-seat' event on bar
    this.bar.removeCustomerFromSeating(target)
    this.bar.emit('customer-happy', target)
    this.bar.emit('next-customer', target)
  }
}

module.exports = HandleCheck