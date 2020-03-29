const Event = require('../base')

class NewCustomer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    if(this.bar.waitCustomer(customer)){
      this.bartender.emit('customer-waiting', customer)
      return
    }
    this.bar.emit('customer-loss', customer)
  }
}

module.exports = NewCustomer