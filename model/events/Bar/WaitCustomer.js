const Event = require('../base')

class WaitCustomer extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`Bar has requested '${customer.getName()}' to wait in queue`)
  }

  async run(ctx, customer) {
    if(this.bar.waitCustomer(customer)){
      this.bar.emit('seat-customer', customer)
      return
    }
    this.bar.emit('customer-loss', customer)
  }
}

module.exports = WaitCustomer