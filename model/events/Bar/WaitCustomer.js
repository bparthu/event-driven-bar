const Event = require('../base')

class WaitCustomer extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`Bar has requested '${customer.getName()}' to wait in queue`)
  }

  async run(bar, customer) {
    if(bar.waitCustomer(customer)){
      bar.emit('seat-customer', customer)
      return
    }
    bar.emit('customer-loss', customer)
  }
}

module.exports = WaitCustomer