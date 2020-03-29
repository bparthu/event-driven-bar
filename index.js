// const BarManagement = require('./model/BarManagement')

// BarManagement.start()

const faker = require('faker')
const BarManager = require('./model/BarManager')
const Customer = require('./model/Customer')
const CONSTANTS = require('./constants')

BarManager
  .createBar('NodeJS beer bar', {
    seatingCapacity: CONSTANTS.SEATING_CAPACITY,
    waitingCapacity: CONSTANTS.WAITING_CAPACITY
  })
  .hireBartender()
  .open(async (bar) => {
    for(let i=0; i<100000; i++) {
      const customer = new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`, bar)
      await customer.registerEvents()
      bar.emit('new-customer', customer)
    }

    process.on('exit', () => {
      console.log('bar closed')
      
      console.log(`waiting list count: ${bar.getWaitCount()}`)
      console.log(`seated count: ${bar.getSeatCount()}`)
      console.log(`success count: ${bar.getSuccessCount()}`)
      console.log(`loss count: ${bar.getLossCount()}`)
      
    })
  })