const Event = require('../base')

class NextCustomer extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`Bar is handling next customer`)
  }

  async run(bar, customer) {
    const nextCustomer = bar.getNextWaitingCustomer()
    if(nextCustomer) {
      bar.emit('seat-customer', nextCustomer)
    }
  }
}

module.exports = NextCustomer