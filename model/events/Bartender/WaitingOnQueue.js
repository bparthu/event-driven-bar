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
        produces 'wait-on-queue' event on consumer
    */

    if(!this.bar.seatCustomer(target)) {
      target.emit('wait-on-queue', target)
      return
    }
    this.bar.emit('exit-from-waitq', target)
    target.emit('seated', target)
  }
}

module.exports = WaitingOnQueue