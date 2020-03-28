const Event = require('../base')

class WaitOnQueue extends Event {
  constructor(bar) {
    super(bar)
    this.bar = bar
  }

  run(target) {
    // emit 'waiting-on-queue' event on bartender
    this.bar.getBartender().emit('waiting-on-queue', target)
  }
}

module.exports = WaitOnQueue