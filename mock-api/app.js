const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const morgan = require('morgan')

const collaborators = require('./routes/collaborators')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use('/collaborators', collaborators)


const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))