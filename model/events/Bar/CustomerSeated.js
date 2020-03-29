const Event = require('../base')

class CustomerSeated extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    this.bar.removeCustomerFromWaitQ(target)
  }
}

module.exports = CustomerSeated