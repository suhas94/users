const express = require('express');
const expressGraphQl = require ( 'express-graphql'); 
const schema = require('./schema/schema');

const app = express();

// use app.use to wire middle up to express server
app.use('/graphql', expressGraphQl({
    schema,                                             // since key and value have same name schema === schema: schema 
    graphiql: true                                      //options object
}));

app.listen(4000, () => {
    console.log('Listening');
});
