const Event = require('../base')

class CustomerLoss extends Event {
  async run(bar, customer) {
    bar.incrementLossCount()
  }
}

module.exports = CustomerLoss