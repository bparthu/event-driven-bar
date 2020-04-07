const faker = require('faker')
const logUpdate = require('log-update')
const EventEmitter = require('events')
const BarManager = require('./model/BarManager')
const Customer = require('./model/Customer')
const CONSTANTS = require('./constants')
const util = require('./util')
const template = require('./template')
const ConsoleObserver = require('./Observer/ConsoleObserver')

// instantiate the observer
const observer = new EventEmitter()
// instantiate Console Observer
const consoleObserver = new ConsoleObserver(observer)
consoleObserver.startListeners()

const Patron = {
  generator: async function*(bar) {
    while(bar.isOpen()) {
      await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_ARRIVAL_TIME_MIN, CONSTANTS.CUSTOMER_ARRIVAL_TIME_MAX))
      yield new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`, bar) 
    }
  }
}

BarManager
  .createBar(`${faker.name.firstName()}'s beer bar`, {
    seatingCapacity: CONSTANTS.SEATING_CAPACITY,
    waitingCapacity: CONSTANTS.WAITING_CAPACITY
  })
  .addObserver(observer)
  .closeAfter(CONSTANTS.BAR_TIME, CONSTANTS.PER_HOUR_IN_MS)
  .openBar(async (bar) => {
    for await(const customer of Patron.generator(bar)) {
      await customer.registerEvents()
      customer.addObserver(observer)
      bar.emit('new-customer', customer)
    }
  })

  // notification event is trigger anytime an event happens within the bar
  consoleObserver.on('notification', (ctx) => {
    logUpdate(template(ctx, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY, CONSTANTS.BAR_TIME))
  })
  