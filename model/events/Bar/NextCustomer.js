const Event = require('../base')

class NextCustomer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    const customer = this.bar.getNextWaitingCustomer()
    if(customer) {
      this.bartender.emit('customer-waiting', customer)
    }
  }
}

module.exports = NextCustomer