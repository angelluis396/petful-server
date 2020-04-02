const express = require('express');
const dogStore = require('../store/dogStore')
const dogRouter = express.Router();

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
.delete( '/:id', (req, res, next) =>{
  dogStore.dequeue();
  return res.status(204).json(dogStore.first);
});


module.exports = dogRouter;