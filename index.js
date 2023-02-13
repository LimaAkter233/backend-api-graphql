const express = require('express');
const colors =  require('colors');
const cors = require('cors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
// const {graphQLHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT|| 5000
const app = express();

//connct to database
connectDB();
// app.use ('/graphql',graphQLHTTP ({
//     schema,
//     graphql: process.env.NODE_ENV === 'development'
// }));
app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );
// app.use('/graphql', graphQLHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development'
// }));
app.listen(port, console.log(`Server is running on port ${port}`));