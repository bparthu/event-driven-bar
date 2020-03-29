const Event = require('../base')

class Seated extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    this.bartender.emit('serve-beer', customer)
  }
}

module.exports = Seated