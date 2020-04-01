const petStore = require('../petStore');
const Queue = require('../Queue');

let dogsQ = new Queue();

const fillDogQ = dogArr => {
  for  (let i = 0; i < dogArr.length; i++) {
    dogsQ.enqueue(dogsArr[i]);
  }
  return dogsQ;
};

const reload = () => {
  fillDogQ(petStore.dogs);
}

const displayDogQ = queue => {
  let node = queue.first;
  while (node) {
    node = node.next
  }
};

module.exports = { dogsQ, reload, displayDogQ, fillDogQ}