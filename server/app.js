const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = 4000

//allow cross-origin requests
app.use(cors());
mongoose.connect('mongodb://shaun:golu123@ds111765.mlab.com:11765/gql_ninja');
mongoose.connection.once('open',()=>{
  console.log('connected to database');
})
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
