const Event = require('../base')

class CustomerLoss extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' has left the bar due to long wait queue`)
  }

  async run(ctx, customer) {
    this.bar.incrementLossCount()
  }
}

module.exports = CustomerLoss