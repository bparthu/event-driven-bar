const Event = require('../base')

class OrderDrink extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    
  }
}

module.exports = OrderDrink