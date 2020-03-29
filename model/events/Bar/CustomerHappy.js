const Event = require('../base')

class CustomerHappy extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    this.bar.incrementSuccessCount()
  }
}

module.exports = CustomerHappy