const Event = require('../base')

class ServeBeer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(ctx, customer) {
    customer.emit('beer-served', customer)
  }
}

module.exports = ServeBeer