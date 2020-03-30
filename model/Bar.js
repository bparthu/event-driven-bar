const Queue = require('./Queue')
const BarObservable = require('./BarObservable')
const Bartender = require('./Bartender')
const util = require('../util')

class Bar extends BarObservable {
  #name
  #seating
  #waitQ
  #bartender
  #successCount
  #lossCount
  #isOpen=false
  #figlet

  constructor(name, config) {
    super(true)
    this.#name = name
    this.#seating = new Queue(config.seatingCapacity)
    this.#waitQ = new Queue(config.waitingCapacity)
    this.#successCount = 0
    this.#lossCount = 0
  }

  async openBar(cb) {
    this.#figlet = await util.figlet(this.getName())
    await this.registerEvents()
    await this.#bartender.registerEvents()
    this.#isOpen = true
    cb(this)
  }

  getFiglet() {
    return this.#figlet
  }

  closeBar() {
    this.#isOpen = false
  }

  isOpen() {
    return this.#isOpen
  }

  getName() {
    return this.#name
  }

  hireBartender() {
    this.#bartender = new Bartender()
    return this
  }

  closeAfter(delay) {
    setTimeout(() => {
      this.closeBar()
    }, delay)
    return this
  }

  getBartender() {
    return this.#bartender
  }

  waitCustomer(customer) {
    const status = this.#waitQ.enqueue(customer)
    return status
  }

  seatCustomer(customer) {
    const status = this.#seating.enqueue(customer)
    return status
  }

  getNextWaitingCustomer() {
    let customer = this.#waitQ.dequeue()
    return customer
  }

  removeCustomerFromWaitQ(customer) {
    const idx = this.#waitQ.indexOf(customer)
    if(idx < 0)
      return false
    this.#waitQ.splice(idx,1)
    return true
  }

  removeCustomerFromSeating(customer) {
    const idx = this.#seating.indexOf(customer)
    if(idx < 0)
      return false
    this.#seating.splice(idx,1)
    return true
  }

  incrementLossCount() {
    this.#lossCount++
  }

  incrementSuccessCount() {
    this.#successCount++
  }

  getConfig() {
    return {
      waitingQCapacity: this.#waitQ.getLength(),
      seatingCapacity: this.#seating.getLength()
    }
  }

  getStats() {
    return {
      waitCount: this.getWaitCount(),
      seatCount: this.getSeatCount(),
      successCount: this.getSuccessCount(),
      lossCount: this.getLossCount()
    }
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