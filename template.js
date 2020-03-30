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
  ` 
}

module.exports = template