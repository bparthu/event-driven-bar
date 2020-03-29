const Event = require('../base')

class ExitFromSeat extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    /*
     removes customer from seat or from seating
     increments success count
     try to seat next person waiting on queue
    */
    this.bar.removeCustomerFromSeating(target)
    this.bar.incrementSuccessCount()
    const nextCustomer = this.bar.getNextWaitingCustomer()
    if(nextCustomer) {
      this.bar.getBartender().emit('waiting-on-queue', nextCustomer)
    }
  }
}

module.exports = ExitFromSeat