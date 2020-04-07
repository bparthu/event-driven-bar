const Event = require('../Base')

class DrinkBeer extends Event {
  async run(customer) {
    if(await customer.drinkBeer()) {
      customer.emit('ready-to-drink')
      return
    }
    customer.getBar().emit('handle-check', customer)
  }
}

module.exports = DrinkBeer