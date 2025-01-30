require('dotenv').config()
const connecTodb = require('./database/db');
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

async function startServer() {
  await connecTodb() //this is where the connection of db called.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });

  console.log(`Server ready at: ${url}`);
}

startServer();