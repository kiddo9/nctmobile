"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const { mergeResolvers } = require("@graphql-tools/merge");
const user = require("./users");
const cohort = require("./cohortRelsover");
exports.resolvers = mergeResolvers([user, cohort]);
