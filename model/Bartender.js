const BarObservable = require('./BarObservable')

class Bartender extends BarObservable {
  constructor() {
    super(true)
  }
}

module.exports = Bartender