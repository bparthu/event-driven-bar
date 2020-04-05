// const BarManagement = require('./model/BarManagement')

// BarManagement.start()

const faker = require('faker')
const logUpdate = require('log-update')
const BarManager = require('./model/BarManager')
const Customer = require('./model/Customer')
const CONSTANTS = require('./constants')
const util = require('./util')
const template = require('./template')

const Observer = require('./Observer/Observer')
const observer = new Observer()

const EventCollector = require('./Observer/EventCollector')
const eventCollector = new EventCollector(observer)

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
  .addObserver(observer)
  .closeAfter(CONSTANTS.BAR_TIME, CONSTANTS.PER_HOUR_IN_MS)
  .openBar(async (bar) => {
    for await(const customer of test.generator(bar)) {
      await customer.registerEvents()
      customer.addObserver(observer)
      bar.emit('new-customer', customer)
    }

    /*
    for(let i=0; i<1; i++) {
      await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_ARRIVAL_TIME_MIN, CONSTANTS.CUSTOMER_ARRIVAL_TIME_MAX))
      const customer = new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`) 
      await customer.registerEvents()
      customer.addObserver(observer)
      bar.emit('new-customer', customer)
    }
    */
    
    
    

  })

  eventCollector.startListeners()

  /*
  eventCollector.on('notification', (event) => {
    logUpdate(`
    ${JSON.stringify(event)}
    `)
  })
  */

  
  eventCollector.on('notification', (bar) => {
    logUpdate(template(bar, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY, CONSTANTS.BAR_TIME))
    //template(event, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY, CONSTANTS.BAR_TIME)
  })
  