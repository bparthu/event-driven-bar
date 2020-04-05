const PartialView = require('./PartialView')

let template = (event, waitingCapacity, seatingCapacity, openFor) => {
  const bar = event.handlers.Bar
  if(!bar)
    return
  const consoleView = new PartialView(bar, waitingCapacity, seatingCapacity, openFor)
  return consoleView.buildView()
}

module.exports = template