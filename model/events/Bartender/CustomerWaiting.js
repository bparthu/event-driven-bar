const _ = require('lodash')
const Event = require('../base')

class CustomerWaiting extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    if(this.bar.seatCustomer(customer)){
      this.bar.emit('customer-seated', customer)
      customer.emit('seated', customer)
      return
    }
  }
}

module.exports = CustomerWaiting