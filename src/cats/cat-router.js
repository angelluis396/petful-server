const express = require('express');
const catRouter = express.Router();
const catStore = require('../store/catStore')


catRouter
.get('/', (req, res, next) => {
  if(catStore.first === null)
    res
    .status(404)
    .send('Sorry there are no Cats available')
  else {
    return res.json(catStore.first.value)
  }
});

catRouter
.delete( '/delete', (req, res, next) =>{
  const cat = catStore.first.value;
  catStore.dequeue();
  catStore.enqueue(cat);
  res.end();
});


module.exports = catRouter;