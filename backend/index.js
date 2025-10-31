const connectToMongo = require('./database');
const express = require('express');


connectToMongo();
const app = express();
const port = 3000;

//Securing cors express
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`E-Note listening at http://localhost:${port}`)
});