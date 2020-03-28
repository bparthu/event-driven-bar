const Event = require('../base')

class Seated extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    // produces 'order-drink' event on bartender
    this.bar.getBartender().emit('order-drink', target)
  }
}

module.exports = Seated