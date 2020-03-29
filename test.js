const logUpdate = require('log-update');
 
const frames = ['-', '\\', '|', '/'];
let obj = {
  successCount: 0,
  lossCount: 0
}

setInterval(() => {
  obj.successCount++
  obj.lossCount++
  logUpdate(
  `
  ${JSON.stringify(obj)}
  `
  );
}, 80);