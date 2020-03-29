const Event = require('../base')

class Seated extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  async run(target) {
    /*
      sets customer status to 'seated' 
      clearTimeout wait timeout
      produces 'order-drink' event on bartender
    */

    /*
    this.bar.getBartender().emit('order-drink', target)
    */

    this.bar.getBartender().emit('order-drink', target)
  }
}

module.exports = Seated