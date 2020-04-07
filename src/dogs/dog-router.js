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
  dogStore.dequeue();
  return res.status(204).json(dogStore.first);
});


module.exports = dogRouter;