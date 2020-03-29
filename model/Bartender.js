const BarObservable = require('./BarObservable')

class Bartender extends BarObservable {
  constructor(bar) {
    super(bar)
  }
}

module.exports = Bartender