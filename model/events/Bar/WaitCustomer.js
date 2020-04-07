const Event = require('../base')

class WaitCustomer extends Event {
  async run(bar, customer) {
    if(bar.waitCustomer(customer)){
      bar.emit('seat-customer', customer)
      return
    }
    bar.emit('customer-loss', customer)
  }
}

module.exports = WaitCustomer