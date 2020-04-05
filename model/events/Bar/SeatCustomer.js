const _ = require('lodash')
const Event = require('../base')

class SeatCustomer extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`Bar is trying to seat '${customer.getName()}'`)
  }

  async run(bar, customer) {
    if(bar.seatCustomer(customer)){
      customer.emit('ready-to-drink')
      return
    }
  }
}

module.exports = SeatCustomer