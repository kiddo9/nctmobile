"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
exports.userSchema = `#graphql

  type Query {
    hello: String
    user(id: ID!): User
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

`;
