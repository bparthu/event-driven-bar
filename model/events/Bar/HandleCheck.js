const _ = require('lodash')
const Event = require('../base')

class HandleCheck extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' wants to pay the bill`)
  }

  async run(bar, customer) {
    // produces 'exit-from-seat' event on bar
    bar.removeCustomerFromSeating(customer)
    bar.emit('customer-happy', customer)
    bar.emit('next-customer', customer)
  }
}

module.exports = HandleCheck