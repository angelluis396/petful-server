const express = require('express');
const catStore = require('../store/catStore')
const catRouter = express.Router();

catRouter
.get('/', (req, res, next) => {
  if(catStore.first === null)
    res
    .status(404)
    .send('Sorry there are no cats available')
  else {
    return res.json(catStore.first.value)
  }
});

catRouter
.delete( '/:id', (req, res, next) =>{
  catStore.dequeue();
  return res.status(204).json(catStore.first);
});


module.exports = catRouter;