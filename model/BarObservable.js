const EventEmitter = require('events')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const CONSTANT = require('../constants')
const eventBus = require('./EventBus')

class BarObservable extends EventEmitter {
  #observers = []
  #currentEvent = null

  constructor() {
    super()
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
          let bar = this.bar
          if(!bar){
            bar = this
          }
          const event = new Class(bar)
          this.on(_.kebabCase(EventName), async (customer) => {
            await event.execute(this, customer)
          })
          resolve()
        }
      })
    })
  }

  addObserver(observer) {
    this.#observers.push(observer)
    return this
  }

  notifyEvents(eventName) {
    this.#currentEvent = eventName
    for(const observer of this.#observers) {
      observer.emit('event', eventName)
    }
  }

  getCurrentEvent() {
    return this.#currentEvent
  }

  notifyStatUpdates(bar) {
    for(const observer of this.#observers) {
      observer.emit('stats-update', bar)
    }
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