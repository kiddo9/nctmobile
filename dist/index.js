"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const { addStudentToCohortConfirm, } = require("./graphql/controllers/cohortController");
// start the server
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        app.use(cors({
            origin: "*",
            credential: true,
            methods: ["POST", "GET"],
        }));
        app.use(express.json());
        app.use(bodyParse.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(bodyParse.urlencoded({ extended: true }));
        // create apollo server
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            introspection: process.env.NODE_ENV !== "production",
        });
        //start server
        yield server.start();
        app.use("/notify", expressMiddleware(server, {
        // context: async ({ req }: any) => {
        //   const authHeader = req.headers.authorization || ""; //req and store auth token
        //   const token = authHeader.replace("Bearer ", ""); //remove thr Bearer to get token it self
        //   //check if token is empty and return error message if its true
        //   if (!token) {
        //     throw new Error("access forbidden");
        //   }
        //   //using try catch block
        //   try {
        //     //verify user auth token
        //     const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //     //return decoded info
        //     return { user: decode };
        //   } catch (error) {
        //     throw new Error("unauthorized: access denied, token invalid");
        //   }
        // },
        }));
        app.get("/", addStudentToCohortConfirm);
        app.listen(process.env.PORT, () => {
            console.log(`server is running`);
        });
    });
}
// start the server
startServer().catch((error) => {
    console.log("error occured", error);
});
// async function jt() {
//   const value = {
//     username: "NCT/DS/24/0528",
//     password: "@#1NTSTabc123",
//   };
//   const response = await axios.post(`${process.env.TESTAPI}`, value);
//   const data = response.data;
//   console.log(response);
//   const token = await jwt.sign(
//     {
//       access_id: data.access_id,
//       student_id: data.student_id,
//       course_id: data.course_id,
//       class_id: data.class_id,
//     },
//     process.env.JWT_SECRET_KEY,
//     { expiresIn: "3d" }
//   );
//   console.log(token);
// }
// jt();
