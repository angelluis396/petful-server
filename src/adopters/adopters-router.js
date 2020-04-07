const express = require('express');
const adoptersRouter = express.Router();
const adopterList = require('../store/adopterList')

adoptersRouter.get('/', (req, res, next) => {
  return res.json(adopterList);
});

adoptersRouter.delete('/delete', (req, res, next) => {
   adopterList.dequeue();
   return res.status(204).json(adopterList.first); 
});

module.exports = adoptersRouter;