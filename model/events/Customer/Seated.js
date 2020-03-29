const Event = require('../base')

class Seated extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    this.bartender.emit('serve-beer', target)
  }
}

module.exports = Seated