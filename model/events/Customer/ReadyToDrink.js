const Event = require('../base')
const CONSTANTS = require('../../../constants')
const util = require('../../../util')

class ReadyToDrink extends Event {
  constructor(bar) {
    super(bar)
  }

  getDescription(handler, customer) {
    console.log(`'${customer.getName()}' is ready to order`)
  }

  async run(customer) {
    const isBeerServed = this.bar.orderBeer()
    if(isBeerServed) {
      customer.emit('drink-beer')
      return
    }
    this.bar.emit('handle-check', customer) 
  }
}

module.exports = ReadyToDrink