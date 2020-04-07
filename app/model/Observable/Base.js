const EventEmitter = require('events')
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const CONSTANT = require('../../constants')

class Observable extends EventEmitter {
  #observers = []
  #currentEvent = null

  constructor() {
    super()
  }

  async registerEvents() {
    const directoryPath = path.join(process.cwd(), CONSTANT.EVENTS_DIR, this.constructor.name)
    return await new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (err, files) => {
        if(err)
          return reject('error occured while registering events', err)

        for(const file of files) {
          const EventName = path.parse(file).name
          let Class = require(path.join(directoryPath, EventName))
          const event = new Class()
          this.on(_.kebabCase(EventName), async (customer) => {
            await event.execute(this, customer)
          })
          resolve()
        }
      })
    })
  }

  setObservers(observers) {
    this.#observers = observers
    return this
  }

  addObserver(observer) {
    this.#observers.push(observer)
    return this
  }

  setCurrentEvent(currentEvent) {
    this.#currentEvent = currentEvent
  }

  notify(eventName) {
    for(const observer of this.#observers) {
      observer.emit(eventName, this)
    }
  }

  getCurrentEvent() {
    return this.#currentEvent
  }
}

module.exports = Observable