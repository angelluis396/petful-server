require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {PORT, CLIENT_ORIGIN} = require('./config');
const dogRouter = require('./pets/dog-router');
const catRouter = require('./pets/cat-router');


const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use('/api/dogs', dogRouter);
app.use('/api/cats', catRouter);

//catches all 404 errors
app.use(function(req, res, next) {
  const err = new Error('Not Located');
  err.status = 404;
  next(err);
});

//handler to catch all errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, ()=> {
  console.log(`Server listening at http://localhost:${PORT}`)
});