const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class DrinkServed extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    /*
      try to drink more
      if limit reached
        produces 'handle-check' event on bartender
    */
    
    /*
    if(target.drinkMore()) {
      util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_DRINK_TIME_MIN, CONSTANTS.CUSTOMER_DRINK_TIME_MAX))
      this.bar.getBartender().emit('order-drink', target)
    } else {
      this.bar.getBartender().emit('handle-check', target)
    }
    */

    await util.takeTime(CONSTANTS.CUSTOMER_DRINK_TIME_MIN, CONSTANTS.CUSTOMER_DRINK_TIME_MAX)
    this.bartender.emit('handle-check', target)
  }
}

module.exports = DrinkServed