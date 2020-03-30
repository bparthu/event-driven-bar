const Event = require('../base')

class CustomerWait extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    if(this.bar.waitCustomer(customer)){
      this.bartender.emit('customer-waiting', customer)
      return
    }
    this.bar.emit('customer-loss', customer)
  }
}

module.exports = CustomerWait