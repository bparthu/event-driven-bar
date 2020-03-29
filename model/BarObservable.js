const EventEmitter = require('events')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const CONSTANT = require('../constants')
const eventBus = require('./EventBus')

class BarObservable extends EventEmitter {
  #monitors = []

  constructor(registerInBus) {
    super()
    if(registerInBus) {
      eventBus.registerEmitter(this)
    }
  }

  async registerEvents() {
    const directoryPath = path.join(__dirname, CONSTANT.EVENTS_DIR, this.constructor.name)
    return await new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, files) => {
        if(err)
          return reject('error occured while registering events', err)

        for(const file of files) {
          const EventName = path.parse(file).name
          let Class = require(path.join(directoryPath, EventName))
          const event = new Class(eventBus.emitters.bar, eventBus.emitters.bartender)
          this.on(_.kebabCase(EventName), async (target) => {
            await event.execute(this, target)
          })
          resolve()
        }
      })
    })
  }

  addMonitor(monitor) {
    this.#monitors.push(monitor)
  }

  postUpdates() {
    this.#monitors.forEach((monitor) => {
      monitor.track(this)
    })
  }

  beforeEmit(eventName, ...params) {
    this.track(eventName, ...params)
  }

  afterEmit(eventName, ...params) {

  }

  track(eventName, ...params) {
    
  }

  emit(eventName, ...params) {
    this.beforeEmit(eventName, ...params)
    super.emit(eventName, ...params)
    this.afterEmit(eventName, ...params)
  }
}

module.exports = BarObservable