const _ = require('lodash')
const Event = require('../base')

class HandleCheck extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' wants to pay the bill`)
  }

  async run(ctx, customer) {
    // produces 'exit-from-seat' event on bar
    this.bar.removeCustomerFromSeating(customer)
    this.bar.emit('customer-happy', customer)
    this.bar.emit('next-customer', customer)
  }
}

module.exports = HandleCheck