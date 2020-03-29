const Bar = require('./Bar')

class BarManager {
  static createBar(name, config) {
    return new Bar(name, config)
  }
}

module.exports = BarManager