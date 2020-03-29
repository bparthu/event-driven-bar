const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class BeerServed extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(customer) {
    await util.takeTime(CONSTANTS.CUSTOMER_DRINK_TIME_MIN, CONSTANTS.CUSTOMER_DRINK_TIME_MAX)
    this.bartender.emit('handle-check', customer)
  }
}

module.exports = BeerServed