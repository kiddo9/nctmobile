const { mergeTypeDefs } = require("@graphql-tools/merge");
const { userSchema } = require("./userSchema");
const { cohortSchema } = require("./cohortSchema");

export const typeDefs = mergeTypeDefs([userSchema, cohortSchema]);
