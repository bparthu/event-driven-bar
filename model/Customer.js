const BarObservable = require('./BarObservable')
const util = require('../util')
const CONSTANTS = require('../constants')

class Customer extends BarObservable {
  #name
  #numberOfDrinks
  #currentDrink

  constructor(name) {
    super(false)
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

  getStats() {
    return {
      currentDrink: this.#currentDrink
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