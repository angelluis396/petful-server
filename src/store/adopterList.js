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
  name: 'Angel',
  age: '23'
});

adopterList.enqueue({
  id: 5,
  name: 'Wanda',
  age: '35'
});