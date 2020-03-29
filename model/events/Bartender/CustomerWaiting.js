const _ = require('lodash')
const Event = require('../base')

class CustomerWaiting extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
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