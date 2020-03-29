const Event = require('../base')
const CONSTANTS = require('../../../constants')

class WaitOnQueue extends Event {
  constructor(bar, bartender) {
    super(bar, bartender)
  }

  async run(target) {
    /* 
      sets customer status to 'waiting'
      sets up wait timeout
      emit 'waiting-on-queue' event on bartender
    */

    if(this.bar.waitCustomer(target)){
      this.bar.getBartender().emit('customer-waiting', target)
      return
    }
    this.bar.incrementLossCount()

    /*
    target.setStatus(CONSTANTS.CUSTOMER_STATUS_WAITING)
    target.startWaiting(() => {
      this.bar.emit('lose-customer', target)
    })
    this.bar.getBartender().emit('waiting-on-queue', target)
    */
  }
}

module.exports = WaitOnQueue