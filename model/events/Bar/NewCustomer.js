const Event = require('../base')

class NewCustomer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    this.bar.incrementTotalCount()
    this.bar.emit('customer-wait', customer)
  }
}

module.exports = NewCustomer