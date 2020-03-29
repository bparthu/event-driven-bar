const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class BeerServed extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    if(await customer.drinkBeer()) {
      customer.emit('beer-served')
      return
    }
    this.bartender.emit('handle-check', customer)
  }
}

module.exports = BeerServed