// const BarManagement = require('./model/BarManagement')

// BarManagement.start()

const faker = require('faker')
const logUpdate = require('log-update')
const BarManager = require('./model/BarManager')
const Customer = require('./model/Customer')
const CONSTANTS = require('./constants')
const util = require('./util')
const template = require('./template')
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
  .addObserver(observer)
  .closeAfter(CONSTANTS.BAR_TIME)
  .openBar(async (bar) => {

    
    for await(const customer of test.generator(bar)) {
      await customer.registerEvents()
      bar.emit('new-customer', customer)
    }
    
    

    /*
    for(let i=0; i<2; i++) {
      await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_ARRIVAL_TIME_MIN, CONSTANTS.CUSTOMER_ARRIVAL_TIME_MAX))
      const customer = new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`) 
      await customer.registerEvents()
      bar.emit('new-customer', customer)
    }
    */
    
    

  })

  
  observer.on('stat-update', (bar) => {
    logUpdate(template(bar, CONSTANTS.WAITING_CAPACITY, CONSTANTS.SEATING_CAPACITY))
  })
  