const petStore = require('../petStore');
const Queue = require('../Queue');

let catsQ = new Queue();

const fillCatQ = catArr => {
  for  (let i = 0; i < catArr.length; i++) {
    catsQ.enqueue(catsArr[i]);
  }
  return catsQ;
};

const reload = () => {
  fillCatQ(petStore.cats);
}

const displayCatQ = queue => {
  let node = queue.first;
  while (node) {
    node = node.next
  }
};

module.exports = { catsQ, reload, displayCatQ, fillCatQ}