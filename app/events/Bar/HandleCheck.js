const Event = require('../Base')

class HandleCheck extends Event {
  async run(bar, customer) {
    // produces 'exit-from-seat' event on bar
    bar.removeCustomerFromSeating(customer)
    bar.emit('customer-happy', customer)
    bar.emit('next-customer', customer)
  }
}

module.exports = HandleCheck