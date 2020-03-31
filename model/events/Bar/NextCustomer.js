const Event = require('../base')

class NextCustomer extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`Bar is handling next customer`)
  }

  async run(ctx, customer) {
    const nextCustomer = this.bar.getNextWaitingCustomer()
    if(nextCustomer) {
      this.bar.emit('seat-customer', nextCustomer)
    }
  }
}

module.exports = NextCustomer