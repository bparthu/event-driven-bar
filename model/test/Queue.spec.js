const chai = require('chai')
const should = chai.should()

const Queue = require('../BlockingQ')

describe('Queue', () => {

  describe('scenario: queue is not full', () => {
    let queue

    beforeEach(() => {
      queue = new Queue(5)
    })

    it('enqueue should return true', () => {
      queue.enqueue('test').should.be.true
    })

    it('should dequeue in fifo', () => {
      Array(5).fill().forEach((val, idx) => {
        queue.enqueue(`test${idx}`)
      })
      Array(5).fill().forEach((val, idx) => {
        queue.dequeue().should.equals(`test${idx}`)
      })
    })

    it('should return undefined when queue is empty', () => {
      should.not.exist(queue.dequeue())
    })
  })
})