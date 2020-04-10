const Queue = require('../Queue');

let adopterList = new Queue();

adopterList.enqueue({
  id: 1,
  name: 'Brendan',
  age: '69'
});

adopterList.enqueue({
  id: 2,
  name: 'Kris',
  age: '99'
});

adopterList.enqueue({
  id: 3,
  name: 'Abby',
  age: '25'
});

adopterList.enqueue({
  id: 4,
  name: 'Luis',
  age: '23'
});

adopterList.enqueue({
  id: 5,
  name: 'Wanda',
  age: '35'
});

adopterList.enqueue({
  id: 6,
  name: 'Dwight',
  age: '40'
});

adopterList.enqueue({
  id: 7,
  name: 'Andy',
  age: '36'
});

adopterList.enqueue({
  id: 8,
  name: 'John',
  age: '30'
});

adopterList.enqueue({
  id: 9,
  name: 'Martha',
  age: '26'
});

adopterList.enqueue({
  id: 10,
  name: 'Siri',
  age: '16'
});

adopterList.enqueue({
  id: 11,
  name: 'Cortona',
  age: '20'
});

adopterList.enqueue({
  id: 12,
  name: 'Erica',
  age: '55'
});

adopterList.enqueue({
  id: 12,
  name: 'You',
  age: '55'
});

module.exports = adopterList;