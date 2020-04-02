class Queue {
  items = []
  #length

  constructor(length) {
    this.#length = length
  }

  list() {
    return this.items
  }

  enqueue(item) {
    /*
    if(this.#items.length === this.#length)
      return false
    
    this.#items.push(item)
    return true
    */
   throw new Error('Enqueue not implemented')
  }

  dequeue() {
    throw new Error('Dequeue not implemented')
  }

  indexOf(target) {
    return this.items.indexOf(target)
  }

  splice(idx, count) {
    return this.items.splice(idx, count)
  }

  getLength() {
    return this.items.length
  }

  isFull() {
    if(this.items.length === this.#length){
      return true
    }
    return false
  }

}

module.exports = Queue