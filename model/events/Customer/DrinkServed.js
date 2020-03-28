const Event = require('../base')

class DrinkServed extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
  }
}

module.exports = DrinkServed