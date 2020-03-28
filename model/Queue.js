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
    if(this.#items.length === this.#length)
      return false
    
    this.#items.push(item)
    return true
  }

  dequeue() {
    return this.#items.shift()
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

}

module.exports = Queue