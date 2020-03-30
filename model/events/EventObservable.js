class EventObservable {
  constructor(observers) {
    this.observers = observers
  }

  notifyAll(eventName) {
    this.observers.forEach((observer) => {
      observer.emit('notification', {eventName})
    })
  }
}

module.exports = EventObservable