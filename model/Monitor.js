const logUpdate = require('log-update');

class Monitor {

  successCount
  lossCount
  seatingCount
  waitingQCount

  constructor() {

  }

  track(bar) {
    this.successCount = bar.getSuccessCount()
    this.lossCount = bar.getLossCount()
    this.seatingCount = bar.getSeatCount()
    this.waitingQCount = bar.getWaitCount()
    
    logUpdate(
      `
      ${JSON.stringify(this)}
      `
      );
    

  }

}

module.exports = Monitor