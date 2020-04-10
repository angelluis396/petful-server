const express = require('express');
const dogRouter = express.Router();
const dogStore = require('../store/dogStore')


dogRouter
.get('/', (req, res, next) => {
  if(dogStore.first === null)
    res
    .status(404)
    .send('Sorry there are no dogs available')
  else {
    return res.json(dogStore.first.value)
  }
});

dogRouter
.delete( '/delete', (req, res, next) =>{
  const dog = dogStore.first.value;
  dogStore.dequeue();
  dogStore.enqueue(dog);
  res.end();
});


module.exports = dogRouter;