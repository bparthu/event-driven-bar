# event-driven-bar

1. bdd
2. jsdoc for comments

bar should be named
bar has seating capacity (queue)
bar has a bartender
bar has waiting queue
bar maintain count of successfully served customer and count of loss customers

customer
each customer first waits in bar waiting queue
  if the queue is full, the customer cannot join and considered as lost count for the bar
customer has to be seated first before ordering drink
each customer can drink between 1 - 10 drinks
it takes between 100 to 500 ms to drink one drink
customer pays bill before leaving the seat

bar tender
moves customer from waiting queue to seating queue
serves drinks
handle payment

bar events
----------
newCustomer (customer generator produces this event) -> 
  adds the customer to waiting queue / increase the lost count for bar
  produces waitOnQueue on customer

bar tender events
-----------------
  waitingOnQueue
    try to add customer to seating queue
    if successful
      produces exit-from-waitq event on bar
      produces seated event on customer
    if unsuccessful
      produces waitOnQueue on customer
  orderDrinks
    produces drinkServed event on customer
  handleCheck
    removes customer from seated queue

customer events
---------------
waitOnQueue (bar produces this event)
  produces waitingOnQueue on bar tender

seated (bar tender produces this event)
  pre determines number of drinks to drink
  produces orderDrinks on bar tender
drinkServed (bar tender produces this event)
  waits between 100 to 500 ms
  if more drinks needed
    produces orderDrinks on bar tender
  else
    produces handleCheck on bar tender



Bar
-------
listens: ['new-customer']
produces: [{ctx: Customer, events: ['wait-on-queue']}]

Customer
--------
listens: ['wait-on-queue', 'seated', 'drink-served']
produces: [{ctx: Bartender, events: ['waiting-on-queue', 'order-drinks', 'handle-check']}]

Bartender
---------
listens: ['waiting-on-queue', 'order-drinks', 'handle-check']
produces: [{ctx: Customer, events: ['wait-on-queue', 'seated', 'drink-served']}]