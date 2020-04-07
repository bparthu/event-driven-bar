const ConsoleView = require('./ConsoleView')

let template = (id, ctx, waitingCapacity, seatingCapacity, openFor) => {
  let bar = ctx.bar
  if(!bar)
    bar = ctx
  const consoleView = new ConsoleView(id, bar, waitingCapacity, seatingCapacity, openFor)
  return consoleView.buildView()
}

module.exports = template