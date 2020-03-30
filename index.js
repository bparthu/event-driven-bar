// const BarManagement = require('./model/BarManagement')

// BarManagement.start()

const faker = require('faker')
const BarManager = require('./model/BarManager')
const Customer = require('./model/Customer')
const CONSTANTS = require('./constants')
const eventBus = require('./model/EventBus')
const util = require('./util')
const template = require('./template')

const logUpdate = require('log-update')
const BarObserver = require('./Observer/BarObserver')
const observer = new BarObserver()

const test = {
  generator: async function*(bar) {
    while(bar.isOpen()) {
      await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_ARRIVAL_TIME_MIN, CONSTANTS.CUSTOMER_ARRIVAL_TIME_MAX))
      yield new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`) 
    }
  }
}

BarManager
  .createBar('NodeJS beer bar', {
    seatingCapacity: CONSTANTS.SEATING_CAPACITY,
    waitingCapacity: CONSTANTS.WAITING_CAPACITY
  })
  .hireBartender()
  .addObserver(observer)
  .closeAfter(CONSTANTS.BAR_TIME)
  .openBar(async (bar) => {

    for await(const customer of test.generator(bar)) {
      await customer.registerEvents()
      bar.emit('new-customer', customer)
    }

    /*
    process.on('exit', () => {
      console.log('bar closed')
      console.log(`waiting list count: ${bar.getWaitCount()}`)
      console.log(`seated count: ${bar.getSeatCount()}`)
      console.log(`success count: ${bar.getSuccessCount()}`)
      console.log(`loss count: ${bar.getLossCount()}`)
      
    })
    */
  })

  

  observer.on('stat-update', (bar) => {
    const stats = bar.getStats()
    logUpdate(template(bar, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY))
  })