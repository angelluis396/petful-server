require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {PORT, CLIENT_ORIGIN} = require('./config');
const dogRouter = require('./dogs/dog-router');
const catRouter = require('./cats/cat-router');
const adoptersRouter = require('./adopters/adopters-router');

const app = express();

app.use(cors());


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
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

app.listen(PORT, ()=> {
  console.log(`Server listening at http://localhost:${PORT}`)
});

module.exports = app;