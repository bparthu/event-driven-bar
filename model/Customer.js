const BarObservable = require('./BarObservable')
const util = require('../util')
const CONSTANTS = require('../constants')

class Customer extends BarObservable {
  #name
  #status
  #waitThreshold
  #waitTimeout
  #numberOfDrinks
  #currentDrink

  constructor(name) {
    super(false)
    this.#name = name
    this.#waitThreshold = util.getRandomInt(CONSTANTS.CUSTOMER_WAIT_MIN_THRESHOLD, CONSTANTS.CUSTOMER_WAIT_MAX_THRESHOLD)
    this.#numberOfDrinks = util.getRandomInt(CONSTANTS.CUSTOMER_DRINKS_MIN, CONSTANTS.CUSTOMER_DRINKS_MAX)
    this.#currentDrink = 1
  }

  getName() {
    return this.#name
  }

  startWaiting(cb) {
    if(!this.#waitTimeout) {
      this.#waitTimeout = setTimeout(cb, this.#waitThreshold)
    }
  }

  stopWaiting() {
    clearTimeout(this.#waitTimeout)
  }

  setStatus(status) {
    this.#status = status
  }

  getNumberOfDrinks() {
    return this.#numberOfDrinks
  }

  async drinkBeer() {
    await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_DRINK_TIME_MIN, CONSTANTS.CUSTOMER_DRINK_TIME_MAX))
    if(this.#currentDrink < this.#numberOfDrinks) {
      this.#currentDrink++
      return true
    }
    return false
  }

  drinkMore() {
    if(this.#currentDrink < this.#numberOfDrinks) {
      this.#currentDrink++
      return true
    }
    return false
  }

  getStatus() {
    return this.#status
  }

  getWaitThreshold() {
    return this.#waitThreshold
  }
}

module.exports = Customer