const getNeonSign = (bar) => {
  return bar.getNeonSign()
}

const getBarStatus = (bar, openFor) => {
  return `Bar status : ${bar.isOpen() ? `🍺 open (${openFor - bar.openSince()}) 🍺` : 'closed'}`
}

const getBarConfig = (waitingCapacity, seatingCapacity, openFor) => {
  return ` 
   -------------------------
  |  * bar configuration  * |
   ____________________________
  |                            |
  | waitingQ capacity : ${waitingCapacity}     |
  | seating capacity  : ${seatingCapacity}     |
  | Open for          : ${openFor} hrs |
  |____________________________|
  `
}

const getCustomerStats = (bar) => {
  // seated customers
  const customer0 = bar.getSeatedCustomer(0)
  const customer1 = bar.getSeatedCustomer(1)
  const customer2 = bar.getSeatedCustomer(2)
  const customer3 = bar.getSeatedCustomer(3)
  const customer4 = bar.getSeatedCustomer(4)
  const customer5 = bar.getSeatedCustomer(5)
  const customer6 = bar.getSeatedCustomer(6)
  const customer7 = bar.getSeatedCustomer(7)
  const customer8 = bar.getSeatedCustomer(8)
  const customer9 = bar.getSeatedCustomer(9)

  const stats = bar.getStats()

  return `
  customers being served (Total 🍺 served: ${bar.getNumberOfBeersSold()}, Average 🍺 per customer : ${((stats.successCount === 0) ? 0 : bar.getNumberOfBeersSold() / stats.successCount).toFixed(2)})
   ---------------------------
    ${customer0 ? `${customer0.getName()} (beers ordered: ${customer0.getCurrentDrinks()}, event: ${customer0.getCurrentEvent()})` : 'Empty'}
    ${customer1 ? `${customer1.getName()} (beers ordered: ${customer1.getCurrentDrinks()}, event: ${customer1.getCurrentEvent()})` : 'Empty'}
    ${customer2 ? `${customer2.getName()} (beers ordered: ${customer2.getCurrentDrinks()}, event: ${customer2.getCurrentEvent()})` : 'Empty'}
    ${customer3 ? `${customer3.getName()} (beers ordered: ${customer3.getCurrentDrinks()}, event: ${customer3.getCurrentEvent()})` : 'Empty'}
    ${customer4 ? `${customer4.getName()} (beers ordered: ${customer4.getCurrentDrinks()}, event: ${customer4.getCurrentEvent()})` : 'Empty'}
    ${customer5 ? `${customer5.getName()} (beers ordered: ${customer5.getCurrentDrinks()}, event: ${customer5.getCurrentEvent()})` : 'Empty'}
    ${customer6 ? `${customer6.getName()} (beers ordered: ${customer6.getCurrentDrinks()}, event: ${customer6.getCurrentEvent()})` : 'Empty'}
    ${customer7 ? `${customer7.getName()} (beers ordered: ${customer7.getCurrentDrinks()}, event: ${customer7.getCurrentEvent()})` : 'Empty'}
    ${customer8 ? `${customer8.getName()} (beers ordered: ${customer8.getCurrentDrinks()}, event: ${customer8.getCurrentEvent()})` : 'Empty'}
    ${customer9 ? `${customer9.getName()} (beers ordered: ${customer9.getCurrentDrinks()}, event: ${customer9.getCurrentEvent()})` : 'Empty'}
   ------------------------------
  `
}

const getBarStats = (bar) => {
  const stats = bar.getStats()
  return `
  newCustomer(${bar.getTotalCount()}) --> waiting(${stats.waitCount}) --> seating(${stats.seatCount}) --> success(${stats.successCount})
      |
      --> loss(${stats.lossCount})
  `
}

module.exports = {
  getNeonSign,
  getBarStatus,
  getBarConfig,
  getCustomerStats,
  getBarStats
}