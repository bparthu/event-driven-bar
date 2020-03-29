const Event = require('../base')

class LoseCustomer extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    /* 
      increments bar loss count 
      removes customer from the waitQ
    */
    this.bar.incrementLossCount()
    this.bar.removeCustomerFromWaitQ(target)
  }
}

module.exports = LoseCustomer