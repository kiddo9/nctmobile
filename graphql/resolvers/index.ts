const { mergeResolvers } = require("@graphql-tools/merge");
const user = require("./users");
const cohort = require("./cohortRelsover");

export const resolvers = mergeResolvers([user, cohort]);
