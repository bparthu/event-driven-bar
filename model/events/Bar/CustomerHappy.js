const Event = require('../base')

class CustomerHappy extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' has left the bar with happy face`)
  }

  async run(bar, customer) {
    bar.incrementSuccessCount()
  }
}

module.exports = CustomerHappy