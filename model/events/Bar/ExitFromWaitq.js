const Event = require('../base')

class ExitFromWaitq extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    // removes customer from waitQ or from seating
    this.bar.removeCustomerFromWaitQ(target)
  }
}

module.exports = ExitFromWaitq