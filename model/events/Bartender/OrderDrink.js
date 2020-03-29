const Event = require('../base')

class OrderDrink extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  async run(target) {
    // emits 'drink-served' on customer
    target.emit('drink-served', target)
  }
}

module.exports = OrderDrink