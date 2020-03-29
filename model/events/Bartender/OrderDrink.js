const Event = require('../base')

class OrderDrink extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    // emits 'drink-served' on customer
    target.emit('drink-served', target)
  }
}

module.exports = OrderDrink