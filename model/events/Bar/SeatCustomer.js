const _ = require('lodash')
const Event = require('../base')

class SeatCustomer extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`Bar is trying to seat '${customer.getName()}'`)
  }

  async run(ctx, customer) {
    if(this.bar.seatCustomer(customer)){
      customer.emit('ready-to-drink')
      return
    }
  }
}

module.exports = SeatCustomer