require("dotenv").config(); // import dotenv
require("./config/DB_connection"); // import DB connection

const express = require("express");
const { ApolloServer } = require("@apollo/server"); // import apollo server
const cors = require("cors");
const bodyParse = require("body-parser");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs } = require("./graphql/schemas/index"); // import typeDefs or schema
const { resolvers } = require("./graphql/resolvers/index"); // import resolvers
const jwt = require("jsonwebtoken");
const axios = require("axios");
const {
  addStudentToCohortConfirm,
} = require("./graphql/controllers/cohortController");

// start the server
async function startServer() {
  const app = express();
  app.use(
    cors({
      origin: ["*"],
      credential: true,
      methods: ["POST", "GET"],
    })
  );
  app.use(bodyParse.json());
  app.use(express.json());
  app.use(bodyParse.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParse.urlencoded({ extended: true }));

  // create apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  //sgtart server
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }: any) => {
        const authHeader = req.headers.authorization || ""; //req and store auth token
        const token = authHeader.replace("Bearer ", ""); //remove thr Bearer to get token it self

        //check if token is empty and return error message if its true
        if (!token) {
          throw new Error("access forbidden");
        }
        //using try catch block
        try {
          //verify user auth token
          const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
          console.log(decode);

          //return decoded info
          return { user: decode };
        } catch (error) {
          throw new Error("unauthorized: access denied, token invalid");
        }
      },
    })
  );

  app.get("/", addStudentToCohortConfirm);

  app.listen(process.env.PORT, () => {
    console.log(`running on http://localhost:${process.env.PORT}/graphql`);
  });
}

// start the server
startServer().catch((error) => {
  console.log("error occured", error);
});
