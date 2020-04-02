const Queue = require('./Queue')

class EvictingQ extends Queue {
  constructor(length) {
    super(length)
  }

  enqueue(item) {
    if(this.isFull()) {
      this.dequeue()
    }
    
    this.list().push(item)
    return true
  }

  dequeue() {
    return this.list().shift()
  }
}

module.exports = EvictingQ