const Event = require('../base')

class NextCustomer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    const nextCustomer = this.bar.getNextWaitingCustomer()
    if(nextCustomer) {
      this.bartender.emit('customer-waiting', nextCustomer)
    }
  }
}

module.exports = NextCustomer