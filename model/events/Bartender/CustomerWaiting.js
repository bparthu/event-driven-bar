const _ = require('lodash')
const Event = require('../base')

class CustomerWaiting extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    if(this.bar.seatCustomer(target)){
      this.bar.removeCustomerFromWaitQ(target)
      target.emit('seated', target)
      return
    }
  }
}

module.exports = CustomerWaiting