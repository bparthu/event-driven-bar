const Event = require('../base')

class ServeBeer extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    target.emit('beer-served', target)
  }
}

module.exports = ServeBeer