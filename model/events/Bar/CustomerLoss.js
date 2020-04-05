const Event = require('../base')

class CustomerLoss extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' has left the bar due to long wait queue`)
  }

  async run(bar, customer) {
    bar.incrementLossCount()
  }
}

module.exports = CustomerLoss