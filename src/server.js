require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {PORT, CLIENT_ORIGIN} = require('./config');
const dogRouter = require('./dogs/dog-router');
const catRouter = require('./cats/cat-router');
const adoptersRouter = require('./adopters/adopters-router');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));


app.use('/api/dogs', dogRouter);
app.use('/api/cats', catRouter);
app.use('/api/adopters', adoptersRouter);

//catches all 404 errors
app.use(function(req, res, next) {
  const err = new Error('Not Located');
  err.status = 404;
  next(err);
});


// 4 parameters in middleware, express knows to treat this as error handler
app.use((error, req, res, next) => {
  let response
  if (process.env.NODE_ENV === 'development') {
    response = { error: { message: 'server error' }}
  } else {
    response = { error }
  }
  res.status(500).json(response)
})

app.listen(PORT, ()=> {
  console.log(`Server listening at http://localhost:${PORT}`)
});

module.exports = app;