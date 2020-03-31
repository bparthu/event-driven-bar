let template = (bar, waitingCapacity, seatingCapacity, openFor) => {
  let stats = bar.getStats()

  return `${bar.getFiglet()}
  Bar status : ${bar.isOpen() ? `🍺 open (${openFor - bar.openSince()}) 🍺` : 'closed'}

   -------------------------
  |  * bar configuration  * |
   ____________________________
  |                            |
  | waitingQ capacity : ${waitingCapacity}     |
  | seating capacity  : ${seatingCapacity}     |
  | Open for          : ${openFor} hrs |
  |____________________________|

  newCustomer --> waiting(${stats.waitCount}) --> seating(${stats.seatCount}) --> success(${stats.successCount})
      |
      --> loss(${stats.lossCount})

  total customers arrived at the bar : ${bar.getTotalCount()}

  Hand crafted with ❤️ by Beer and NodeJS enthusiasist
  https://github.com/bparthu/event-driven-bar
  ` 
}

module.exports = template