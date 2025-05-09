export const userSchema = `#graphql

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
