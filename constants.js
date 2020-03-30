const SEATING_CAPACITY=10
const WAITING_CAPACITY=10
const EVENTS_DIR='events'
const CUSTOMER_WAIT_MIN_THRESHOLD=1
const CUSTOMER_WAIT_MAX_THRESHOLD=10000
const CUSTOMER_STATUS_WAITING = 'waiting'
const CUSTOMER_STATUS_SEATED = 'seated'
const CUSTOMER_DRINKS_MIN = 1
const CUSTOMER_DRINKS_MAX = 5
const CUSTOMER_DRINK_TIME_MIN=100
const CUSTOMER_DRINK_TIME_MAX=500
const CUSTOMER_ARRIVAL_TIME_MIN=50
const CUSTOMER_ARRIVAL_TIME_MAX=100
const BAR_TIME=30 * 1000

module.exports = {
  SEATING_CAPACITY,
  WAITING_CAPACITY,
  EVENTS_DIR,
  CUSTOMER_WAIT_MIN_THRESHOLD,
  CUSTOMER_WAIT_MAX_THRESHOLD,
  CUSTOMER_STATUS_WAITING,
  CUSTOMER_STATUS_SEATED,
  CUSTOMER_DRINKS_MIN,
  CUSTOMER_DRINKS_MAX,
  CUSTOMER_DRINK_TIME_MIN,
  CUSTOMER_DRINK_TIME_MAX,
  CUSTOMER_ARRIVAL_TIME_MIN,
  CUSTOMER_ARRIVAL_TIME_MAX,
  BAR_TIME
}