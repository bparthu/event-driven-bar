const Event = require('../base')

class NewCustomer extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  async run(target) {
    /*
      if seating capacity is full
        increment the loss count
      else
        adds customer to waiting queue and emits 'wait-on-queue' event on customer
    */
    target.emit('wait-on-queue', target)
    /*
    if(!this.bar.waitCustomer(target)) {
      this.bar.incrementLossCount()
      return
    }

    target.emit('wait-on-queue', target)
    */
  }
}

module.exports = NewCustomer