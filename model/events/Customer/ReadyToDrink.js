const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class ReadyToDrink extends Event {
  async run(customer) {
    const isBeerServed = customer.orderBeer()
    if(isBeerServed) {
      customer.emit('drink-beer')
      return
    }
    customer.getBar().emit('handle-check', customer) 
  }
}

module.exports = ReadyToDrink