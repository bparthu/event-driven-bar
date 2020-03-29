const Event = require('../base')

class CustomerLoss extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    this.bar.incrementLossCount()
  }
}

module.exports = CustomerLoss