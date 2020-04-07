const Event = require('../base')

class NewCustomer extends Event {
  async run(bar, customer) {
    bar.incrementTotalCount()
    bar.emit('wait-customer', customer)
  }
}

module.exports = NewCustomer