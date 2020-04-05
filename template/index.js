const ConsoleView = require('./ConsoleView')

let template = (bar, waitingCapacity, seatingCapacity, openFor) => {
  if(!bar)
    return
  const consoleView = new ConsoleView(bar, waitingCapacity, seatingCapacity, openFor)
  return consoleView.buildView()
}

module.exports = template