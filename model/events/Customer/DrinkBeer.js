const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class DrinkBeer extends Event {
  constructor() {
    super()
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' drinks beer`)
  }

  async run(customer) {
    if(await customer.drinkBeer()) {
      customer.emit('ready-to-drink')
      return
    }
    customer.getBar().emit('handle-check', customer)
  }
}

module.exports = DrinkBeer