const Event = require('../base')

class CustomerHappy extends Event {
  async run(bar, customer) {
    bar.incrementSuccessCount()
  }
}

module.exports = CustomerHappy