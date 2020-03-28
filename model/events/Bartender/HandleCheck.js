const _ = require('lodash')
const Event = require('../base')

class HandleCheck extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    
  }
}

module.exports = HandleCheck