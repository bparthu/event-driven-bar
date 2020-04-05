const ConsoleView = require('./ConsoleView')

let template = (event, waitingCapacity, seatingCapacity, openFor) => {
  const bar = event.handlers.Bar
  if(!bar)
    return
  const consoleView = new ConsoleView(bar, waitingCapacity, seatingCapacity, openFor)
  return consoleView.buildView()
}

module.exports = template