const Event = require('../base')

class NewCustomer extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`A new customer '${customer.getName()}' has arrived`)
  }

  async run(bar, customer) {
    bar.incrementTotalCount()
    bar.emit('wait-customer', customer)
  }
}

module.exports = NewCustomer