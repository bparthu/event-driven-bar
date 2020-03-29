const Event = require('../base')

class CustomerLoss extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    this.bar.incrementLossCount()
  }
}

module.exports = CustomerLoss