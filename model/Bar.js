const fs = require('fs')
const path = require('path')
const Queue = require('./Queue')
const _ = require('lodash')
const constants = require('../constants')
const EventEmitter = require('events')

class Bar extends EventEmitter {
  #name
  #seating
  #waitQ
  #bartender
  #successCount
  #lossCount


  constructor(name, bartender, seatingCapacity, waitingCapacity) {
    super()
    this.#name = name
    this.#bartender = bartender
    this.#seating = new Queue(seatingCapacity)
    this.#waitQ = new Queue(waitingCapacity)
    this.#successCount = 0
    this.#lossCount = 0
  }

  emit(eventName, ...params) {
    super.emit(eventName, ...params)
  }

  open() {
    console.log('bar opened')
  }

  getBartender() {
    return this.#bartender
  }

  waitCustomer(customer) {
    return this.#waitQ.enqueue(customer)
  }

  seatCustomer(customer) {
    return this.#seating.enqueue(customer)
  }

  removeCustomerFromWaitQ(customer) {
    const idx = this.#waitQ.indexOf(customer)
    if(idx < 0)
      return false
    this.#waitQ.splice(idx,1)
    return true
  }

  removeCustomerFromSeating(customer) {
    const idx = this.#seating.indexOf(customer)
    if(idx < 0)
      return false
    this.#seating.splice(idx,1)
    return true
  }

  incrementLossCount() {
    this.#lossCount++
  }

  getSeatCount() {
    return this.#seating.getLength()
  }

  getWaitCount() {
    return this.#waitQ.getLength()
  }

  getSuccessCount() {
    return this.#successCount
  }

  getLossCount() {
    return this.#lossCount
  }
}

module.exports = Bar