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

module.exports = {
  getRandomInt,
  takeTime
}