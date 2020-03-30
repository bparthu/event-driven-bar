const figletLib = require('figlet')

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const takeTime = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, delay)
})

const figlet = (text) => new Promise((resolve, reject) => {
  figletLib(text, function(err, data) {
    if (err) {
        reject(err)
        return
    }
    resolve(data)
  });
})

module.exports = {
  getRandomInt,
  takeTime,
  figlet
}