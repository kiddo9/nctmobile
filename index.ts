require("dotenv").config(); // import dotenv
require("./config/DB_connection"); // import DB connection

const { ApolloServer } = require("@apollo/server"); // import apollo server
const { startStandaloneServer } = require("@apollo/server/standalone"); // import standalone server
const cors = require("cors"); // import cors
const bodyParser = require("body-parser"); // import body-parser
const { typeDefs } = require("./graphql/schemas/index"); // import typeDefs or schema
const { resolvers } = require("./graphql/resolvers/index"); // import resolvers

// start the server
async function startServer() {
  // create apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // start the server
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: process.env.PORT,
    },
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  console.log(`${url} runing`);
}

// start the server
startServer().catch((error) => {
  console.log("error occured", error);
});
