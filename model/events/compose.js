[
  {
    eventName: 'new-customer',
    description: 'Bar asks new customer to wait in the waiting line',
    result: [
      {
        when: true,
        runEvents: [
          {
            eventName: 'customer-waiting',
            context: 'bartender',
            param: 'customer'
          }
        ]
      },
      {
        when: false,
        runEvents: [
          {
            eventName: 'customer-loss',
            context: 'bar',
            param: 'customer'
          }
        ]
      }
    ]
  },
  {
    eventName: 'customer-waiting',
    description: 'Customer is waiting',
    result: [
      {
        when: true,
        runEvents: [
          {
            eventName: 'customer-seated',
            context: 'bar',
            param: 'customer'
          },
          {
            eventName: 'beer-served',
            context: 'customer',
            param: 'customer'
          }
        ]
      }
    ]
  },
  {
    eventName: 'customer-loss',
    description: 'Waiting line is long, customer lost patience and left',
    result: []
  },
  {
    eventName: 'customer-seated',
    description: 'Customer is seated',
    result: []
  },
  {
    eventName: 'beer-served',
    description: 'Beer is served to the customer',
    result: [
      {
        when: true,
        runEvents: [
          {
            eventName: 'beer-served',
            context: 'customer',
            param: 'customer'
          }
        ]
      },
      {
        when: false,
        runEvents: [
          {
            eventName: 'handle-check',
            context: 'bartender',
            param: 'customer'
          }
        ]
      }
    ]
  },
  {
    eventName: 'handle-check',
    description: 'Customer pays the check',
    result: [
      {
        when: true,
        runEvents: [
          {
            eventName: 'customer-happy',
            context: 'bar',
            param: 'customer'
          },
          {
            eventName: 'next-customer',
            context: 'bar',
            param: 'customer'
          }
        ]
      }
    ]
  },
  {
    eventName: 'customer-happy',
    description: 'Customer has left the bar happy',
    result: [
      {
        when: true,
        runEvents: []
      }
    ]
  },
  {
    eventName: 'next-customer',
    description: 'Bar is handling next customer',
    result: [
      {
        when: 'nextCustomer',
        runEvents: [
          {
            eventName: 'customer-waiting',
            context: 'bartender',
            param: 'nextCustomer'
          }
        ]
      }
    ]
  }
]