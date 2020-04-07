const faker = require('faker')
const util = require('../util')
const Customer = require('./Observable/Customer')
const CONSTANTS = require('../constants')

class Bouncer {
  static async *receiveNewCustomer(bar) {
    while(bar.isOpen()) {
      await util.takeTime(util.getRandomInt(CONSTANTS.CUSTOMER_ARRIVAL_TIME_MIN, CONSTANTS.CUSTOMER_ARRIVAL_TIME_MAX))
      yield new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`, bar) 
    }
  }
}

module.exports = Bouncer