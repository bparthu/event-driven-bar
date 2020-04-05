class ConsoleView {
  #bar
  #waitingCapacity
  #seatingCapacity
  #openFor
  constructor(bar, waitingCapacity, seatingCapacity, openFor) {
    this.#bar = bar
    this.#waitingCapacity = waitingCapacity
    this.#seatingCapacity = seatingCapacity
    this.#openFor = openFor
  }

  getNeonSign() {
    return this.#bar.getNeonSign()
  }

  getBarStatus() {
    return `Bar status : ${this.#bar.isOpen() ? `🍺 open (${this.#openFor - this.#bar.openSince()}) 🍺` : 'closed'}`
  }

  getBarConfig() {
    return ` 
   -------------------------
  |  * bar configuration  * |
   ____________________________
  |                            |
  | waitingQ capacity : ${this.#waitingCapacity}     |
  | seating capacity  : ${this.#seatingCapacity}     |
  | Open for          : ${this.#openFor} hrs |
  |____________________________|`
  }

  getCustomerStats() {
    const stats = this.#bar.getStats()

    let result = `
   -------------------------------------------------------------------------------
  | customers being served (Total 🍺 served: ${this.#bar.getNumberOfBeersSold()}, Average 🍺 per customer : ${((stats.successCount === 0) ? 0 : this.#bar.getNumberOfBeersSold() / stats.successCount).toFixed(2)}) |
   -------------------------------------------------------------------------------
    `
    if(this.#bar.getSeatCount() > 0) {
      for(const customer of this.#bar.getSeatedCustomers()) {
        result = `${result}\n     ${customer ? `${customer.getName()} (beers ordered: ${customer.getCurrentDrinks()}, event: ${customer.getCurrentEvent()})` : 'Empty'}`
      }
    } else {
      result = `${result}\n     Not serving any customers`
    }
    result = `${result}\n   ----------------------------------------------------------------------------- `
    return result
  }

  getBarStats() {
    const stats = this.#bar.getStats()
    return `
   ------------------------------------------------------------------------------- 
  |  Bar  Stats  |  Bar events : ${this.#bar.getCurrentEvent()}
   ------------------------------------------------------------------------------- 

    newCustomer(${this.#bar.getTotalCount()}) --> waiting(${stats.waitCount}) --> seating(${stats.seatCount}) --> success(${stats.successCount})
        |
        --> loss(${stats.lossCount})`
  }

  buildView() {
    return `${this.getNeonSign()}
    ${this.getBarStatus()}
    ${this.getBarConfig()}
    ${this.getBarStats()}
    ${this.getCustomerStats()}
    `
  }
}

module.exports = ConsoleView