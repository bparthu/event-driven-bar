const Event = require('../base')
const CONSTANTS = require('../../../constants')

class WaitOnQueue extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    if(this.bar.waitCustomer(customer)){
      this.bartender.emit('customer-waiting', customer)
      return
    }
    this.bar.incrementLossCount()
  }
}

module.exports = WaitOnQueue