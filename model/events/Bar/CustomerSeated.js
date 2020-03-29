const Event = require('../base')

class CustomerSeated extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    this.bar.removeCustomerFromWaitQ(customer)
  }
}

module.exports = CustomerSeated