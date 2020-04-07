const faker = require('faker')
const logUpdate = require('log-update')
const uuid = require('uuid').v4
const BarManager = require('./model/Domain/BarManager')
const CONSTANTS = require('./constants')
const template = require('./template')
const ConsoleObserver = require('./model/Observer/ConsoleObserver')
const Bouncer = require('./model/Domain/Bouncer')

// instantiate Console Observer
const consoleObserver = new ConsoleObserver(uuid())
// start listeners
consoleObserver.startListeners()

/*
  1. create a named bar with configured seating capacity and waiting capacity
  2. add external observers
  3. bar should be closed after being open for configured time limit
  4. customers can visit the bar once the bar is opened
*/
BarManager
  .createBar(`${faker.name.firstName()}'s beer bar`, {
    seatingCapacity: CONSTANTS.SEATING_CAPACITY,
    waitingCapacity: CONSTANTS.WAITING_CAPACITY
  })
  .setObservers([consoleObserver])
  .closeAfter(CONSTANTS.BAR_TIME, CONSTANTS.PER_HOUR_IN_MS)
  .openBar(async (bar) => {
    for await(const customer of Bouncer.receiveNewCustomer(bar)) {
      await customer.registerEvents()
      customer.setObservers([consoleObserver])
      bar.emit('new-customer', customer)
    }
  })

  // notification event is triggered when the state of bar changes
  consoleObserver.on('notification', (observer, ctx) => {
    logUpdate(template(observer.getId(), ctx, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY, CONSTANTS.BAR_TIME))
  })