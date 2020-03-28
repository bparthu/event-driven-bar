const EventEmitter = require('events')

class BarEmitter extends EventEmitter {
  constructor() {
    super()
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