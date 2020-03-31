const Event = require('../base')

class NewCustomer extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`A new customer '${customer.getName()}' has arrived`)
  }

  async run(ctx, customer) {
    this.bar.incrementTotalCount()
    this.bar.emit('wait-customer', customer)
  }
}

module.exports = NewCustomer