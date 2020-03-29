const _ = require('lodash')
const Event = require('../base')

class CustomerWaiting extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    if(this.bar.seatCustomer(customer)){
      this.bar.emit('customer-seated', customer)
      customer.emit('seated')
      return
    }
  }
}

module.exports = CustomerWaiting