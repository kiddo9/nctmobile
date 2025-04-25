"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { userSchema } = require("./userSchema");
const { cohortSchema } = require("./cohortSchema");
exports.typeDefs = mergeTypeDefs([userSchema, cohortSchema]);
