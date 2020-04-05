const Queue = require('./BlockingQ')
const BarObservable = require('./BarObservable')
const util = require('../util')

class Bar extends BarObservable {
  #name
  #seating
  #waitQ
  #successCount
  #lossCount
  #isOpen=false
  #neonSign
  #totalCount
  #BeerSoldCount
  #openSince

  constructor(name, config) {
    super(true)
    this.#name = name
    this.#seating = new Queue(config.seatingCapacity)
    this.#waitQ = new Queue(config.waitingCapacity)
    this.#successCount = 0
    this.#lossCount = 0
    this.#totalCount = 0
    this.#BeerSoldCount = 0
    this.#openSince = 0
  }

  async openBar(cb) {
    this.#neonSign = await util.figlet(this.getName())
    await this.registerEvents()
    this.#isOpen = true
    cb(this)
  }

  getNeonSign() {
    return this.#neonSign
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

  closeAfter(delay, perHourMs) {
    setTimeout(() => {
      this.closeBar()
    }, delay * perHourMs)

    this.interval = setInterval(() => {
      this.#openSince++
      if(!this.isOpen())
        clearInterval(this.interval)
    }, perHourMs)
    return this
  }

  waitCustomer(customer) {
    const status = this.#waitQ.enqueue(customer)
    return status
  }

  openSince() {
    return this.#openSince
  }

  seatCustomer(customer) {
    /*
      seating customer means
        try adding customer to the seat
          if successful
            remove customer from waitQ
          else
            do nothing
    */
    const isSeated = this.#seating.enqueue(customer)
    if(isSeated)
      this.removeCustomerFromWaitQ(customer)
    return isSeated
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

  orderBeer() {
    this.#BeerSoldCount++
    return true
  }

  getNumberOfBeersSold() {
    return this.#BeerSoldCount
  }

  incrementLossCount() {
    this.#lossCount++
  }

  incrementSuccessCount() {
    this.#successCount++
  }

  incrementTotalCount() {
    this.#totalCount++
  }

  getTotalCount() {
    return this.#totalCount
  }

  getConfig() {
    return {
      waitingQCapacity: this.#waitQ.getLength(),
      seatingCapacity: this.#seating.getLength()
    }
  }

  getStats() {
    return {
      totalCount: this.getTotalCount(),
      waitCount: this.getWaitCount(),
      seatCount: this.getSeatCount(),
      successCount: this.getSuccessCount(),
      lossCount: this.getLossCount()
    }
  }

  getSeatedCustomer(idx) {
    return this.#seating.getItem(idx)
  }

  getSeatedCustomers() {
    return this.#seating.list()
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