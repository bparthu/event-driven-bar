const Event = require('../base')

class NewCustomer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    if(this.bar.waitCustomer(target)){
      this.bartender.emit('customer-waiting', target)
      return
    }
    this.bar.emit('customer-loss', target)
  }
}

module.exports = NewCustomer