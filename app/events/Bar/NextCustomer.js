const Event = require('../Base')

class NextCustomer extends Event {
  async run(bar, customer) {
    const nextCustomer = bar.getNextWaitingCustomer()
    if(nextCustomer) {
      bar.emit('seat-customer', nextCustomer)
    }
  }
}

module.exports = NextCustomer