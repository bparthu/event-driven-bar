let template = (event, waitingCapacity, seatingCapacity, openFor) => {
  const bar = event.handlers.Bar
  if(!bar)
    return
  
  const stats = bar.getStats()
  const currEvents = event.queue.list()

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

  Total 🍺 served         : ${bar.getNumberOfBeersSold()}
  Average 🍺 per customer : ${((stats.successCount === 0) ? 0 : bar.getNumberOfBeersSold() / stats.successCount).toFixed(2)}

  Events:

    ${currEvents[4]}
    ${currEvents[3]}
    ${currEvents[2]}
    ${currEvents[1]}
    ${currEvents[0]}

  newCustomer(${bar.getTotalCount()}) --> waiting(${stats.waitCount}) --> seating(${stats.seatCount}) --> success(${stats.successCount})
      |
      --> loss(${stats.lossCount})

  Hand crafted with ❤️ by Beer and NodeJS enthusiasist
  https://github.com/bparthu/event-driven-bar
  ` 
}

module.exports = template