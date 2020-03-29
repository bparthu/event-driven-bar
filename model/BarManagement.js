const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const faker = require('faker')
const Bartender = require('./Bartender')
const Bar = require('./Bar')
const CONSTANT = require('../constants')
const Monitor = require('./Monitor')

const Customer = require('./Customer')

class BarManagement {
  static async start() {
    let bartender = new Bartender()
    //let monitor = new Monitor()
    let monitor = null
    let bar = new Bar('NodeJS beer bar', bartender, CONSTANT.SEATING_CAPACITY, CONSTANT.WAITING_CAPACITY, monitor)
    bar.open()
    await this.registerEvents(bar, bar)
    await this.registerEvents(bar, bar.getBartender())

    for(let i=0; i<100000; i++) {
      const customer = new Customer(`${faker.name.firstName()} ${faker.name.lastName()}`)
      await this.registerEvents(bar, customer)
      bar.emit('new-customer', customer)
    }
    
    process.on('exit', () => {
      console.log('bar closed')
      
      console.log(`waiting list count: ${bar.getWaitCount()}`)
      console.log(`seated count: ${bar.getSeatCount()}`)
      console.log(`success count: ${bar.getSuccessCount()}`)
      console.log(`loss count: ${bar.getLossCount()}`)
      
    })
    
    
  }

  static async registerEvents(bar, ctx) {
    const directoryPath = path.join(__dirname, CONSTANT.EVENTS_DIR, ctx.constructor.name)
    return await new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, files) => {
        if(err)
          return reject('error occured while registering events', err)
        
        for(const file of files) {
          const EventName = path.parse(file).name
          let Class = require(path.join(directoryPath, EventName))
          const event = new Class(bar)
          ctx.on(_.kebabCase(EventName), async (target) => {
            await event.execute(ctx, target)
          })
          resolve()
        }
      })
    })
  }
}

module.exports = BarManagement