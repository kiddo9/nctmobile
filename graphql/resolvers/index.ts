const { mergeResolvers } = require("@graphql-tools/merge");
const user = require("./Users");
const cohort = require("./cohortRelsover");

export const resolvers = mergeResolvers([user, cohort]);
