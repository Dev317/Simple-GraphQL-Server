const express = require('express');
const app = express();
const PORT = 8080;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/index');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(PORT, () => {
    console.log('GraphiQL is live on http://localhost:8080/graphql');
});