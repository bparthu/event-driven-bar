const Event = require('../Base')

class CustomerHappy extends Event {
  async run(bar, customer) {
    bar.incrementSuccessCount()
  }
}

module.exports = CustomerHappy