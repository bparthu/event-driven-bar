const Event = require('../base')

class CustomerHappy extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' has left the bar with happy face`)
  }

  async run(ctx, customer) {
    this.bar.incrementSuccessCount()
  }
}

module.exports = CustomerHappy