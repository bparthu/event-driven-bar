const Observable = require('./Base')
const util = require('../../util')
const CONSTANTS = require('../../constants')

class Customer extends Observable {
  #name
  #numberOfDrinks
  #currentDrink
  bar

  constructor(name, bar) {
    super()
    this.bar = bar
    this.#name = name
    this.#numberOfDrinks = util.getRandomInt(CONSTANTS.CUSTOMER_DRINKS_MIN, CONSTANTS.CUSTOMER_DRINKS_MAX)
    this.#currentDrink = 1
  }

  getName() {
    return this.#name
  }

  getNumberOfDrinks() {
    return this.#numberOfDrinks
  }

  getCurrentDrinks() {
    return this.#currentDrink
  }

  getBar() {
    return this.bar
  }

  orderBeer() {
    return this.bar.orderBeer()
  }

  getStats() {
    return {
      currentDrink: this.getCurrentDrinks()
    }
  }

  async drinkBeer() {
    await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_DRINK_TIME_MIN, CONSTANTS.CUSTOMER_DRINK_TIME_MAX))
    if(this.#currentDrink < this.#numberOfDrinks) {
      this.#currentDrink++
      return true
    }
    return false
  }
}

module.exports = Customer