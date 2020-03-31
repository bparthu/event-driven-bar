let template = (bar, waitingCapacity, seatingCapacity) => {
  let stats = bar.getStats()

  return `${bar.getFiglet()}
              
              Bar status : ${bar.isOpen() ? '🍺 open 🍺' : 'close'}
  
             -------------------------
            |  * bar configuration  * |
             _________________________
            |                         |
            | waitingQ capacity : ${waitingCapacity}  |
            | seating capacity  : ${seatingCapacity}  |
            |_________________________|
            
            newCustomer --> waiting(${stats.waitCount}) --> seating(${stats.seatCount}) --> success(${stats.successCount})
                |
                --> loss(${stats.lossCount})

            total customer arrived at the bar : ${bar.getTotalCount()}

  Hand crafted with ❤️ by Beer and NodeJS enthusiasist
  https://github.com/bparthu/event-driven-bar
  ` 
}

module.exports = template