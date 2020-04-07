const chai = require('chai')
const should = chai.should()

const Queue = require('../Queue')

describe('Queue', () => {

  describe('scenario: queue empty', () => {
    let queue

    beforeEach(() => {
      queue = new Queue(5)
    })

    it('enqueue(): should return true', () => {
      queue.enqueue('test').should.be.true
    })

    it('dequeue(): should dequeue in fifo', () => {
      Array(5).fill().forEach((val, idx) => {
        queue.enqueue(`test${idx}`)
      })
      Array(5).fill().forEach((val, idx) => {
        queue.dequeue().should.equals(`test${idx}`)
      })
    })

    it('dequeue(): should return undefined when queue is empty', () => {
      should.not.exist(queue.dequeue())
    })

  })

  describe('scenario: queue is half full', () => {
    let queue
    const testdata = ['test1', 'test2', 'test3']

    beforeEach(() => {
      queue = new Queue(5)
      testdata.map((item) => {queue.enqueue(item)})
    })

    it('list(): should return items in queue', () => {
      queue.list().map((item, idx) => {item.should.equals(testdata[idx])})
    })

    it('indexOf(): should return index of the given item', () => {
      queue.indexOf('test1').should.equals(0)
    })

    it('splice(): should remove an item from middle and reorganize the queue', () => {
      queue.indexOf('test3').should.equals(2)
      queue.splice(1, 1)
      queue.list().length.should.be.equals(2)
      queue.indexOf('test3').should.equals(1)
    })

    it('getLength(): should return length of the items in queue', () => {
      queue.getLength().should.equals(3)
    })
  })

  describe('scenario: queue is full', () => {
    let queue

    beforeEach(() => {
      queue = new Queue(1)
      queue.enqueue({})
    })

    it('enqueue(): should return false', () => {
      queue.enqueue('test').should.be.false
    })

    it('dequeue(): should allow enqueue after dequeue', () => {
      queue.dequeue()
      queue.enqueue({}).should.be.true
    })

    it('isFull(): should return true', () => {
      queue.isFull().should.equals(true)
    })
  })
})