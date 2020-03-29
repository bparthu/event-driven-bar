const Event = require('../base')

class WaitingOnQueue extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    /*
      try to arrange seating for the customer
      if successful
        produces 'exit-from-waitq' event on bar
        produces 'seated' event on consumer
      else
        do nothing
    */

    if(!this.bar.seatCustomer(target)) {
      // cannot seat customer
      return
    }
    target.stopWaiting()
    this.bar.removeCustomerFromWaitQ(target)
    target.emit('seated', target)
  }
}

module.exports = WaitingOnQueue