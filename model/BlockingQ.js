const Queue = require('./Queue')

class BlockingQ extends Queue {
  constructor(length) {
    super(length)
  }

  enqueue(item) {
    if(this.isFull())
      return false
    
    this.list().push(item)
    return true
  }

  dequeue() {
    return this.list().shift()
  }
}

module.exports = BlockingQ