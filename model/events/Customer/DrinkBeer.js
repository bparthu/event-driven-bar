const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class DrinkBeer extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' drinks beer`)
  }

  async run(customer) {
    if(await customer.drinkBeer()) {
      customer.emit('ready-to-drink')
      return
    }
    this.bar.emit('handle-check', customer)
  }
}

module.exports = DrinkBeer