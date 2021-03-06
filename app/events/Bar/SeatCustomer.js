const Event = require('../Base')

class SeatCustomer extends Event {
  async run(bar, customer) {
    if(bar.seatCustomer(customer)){
      customer.emit('ready-to-drink')
      return
    }
  }
}

module.exports = SeatCustomer