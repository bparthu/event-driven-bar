const Queue = require('./Queue')
const BarObservable = require('./BarObservable')
const Bartender = require('./Bartender')

class Bar extends BarObservable {
  #name
  #seating
  #waitQ
  #bartender
  #successCount
  #lossCount

  constructor(name, config) {
    super()
    this.#name = name
    this.#seating = new Queue(config.seatingCapacity)
    this.#waitQ = new Queue(config.waitingCapacity)
    this.#successCount = 0
    this.#lossCount = 0
  }

  async open(cb) {
    await this.registerEvents()
    await this.#bartender.registerEvents()
    cb(this)
  }

  hireBartender() {
    this.#bartender = new Bartender(this)
    return this
  }

  getBartender() {
    return this.#bartender
  }

  waitCustomer(customer) {
    const status = this.#waitQ.enqueue(customer)
    this.postUpdates()
    return status
  }

  seatCustomer(customer) {
    const status = this.#seating.enqueue(customer)
    this.postUpdates()
    return status
  }

  getNextWaitingCustomer() {
    let customer = this.#waitQ.dequeue()
    this.postUpdates()
    return customer
  }

  removeCustomerFromWaitQ(customer) {
    const idx = this.#waitQ.indexOf(customer)
    if(idx < 0)
      return false
    this.#waitQ.splice(idx,1)
    this.postUpdates()
    return true
  }

  removeCustomerFromSeating(customer) {
    const idx = this.#seating.indexOf(customer)
    if(idx < 0)
      return false
    this.#seating.splice(idx,1)
    this.postUpdates()
    return true
  }

  incrementLossCount() {
    this.#lossCount++
    this.postUpdates()
  }

  incrementSuccessCount() {
    this.#successCount++
    this.postUpdates()
  }

  getSeatCount() {
    return this.#seating.getLength()
  }

  getWaitCount() {
    return this.#waitQ.getLength()
  }

  getSuccessCount() {
    return this.#successCount
  }

  getLossCount() {
    return this.#lossCount
  }
}

module.exports = Bar