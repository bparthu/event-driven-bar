class Queue {
  #items = []
  #length

  constructor(length) {
    this.#length = length
  }

  list() {
    return this.#items
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

  indexOf(target) {
    return this.#items.indexOf(target)
  }

  splice(idx, count) {
    return this.#items.splice(idx, count)
  }

  getLength() {
    return this.#items.length
  }

  isFull() {
    if(this.#items.length === this.#length){
      return true
    }
    return false
  }

}

module.exports = Queue