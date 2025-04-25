"use strict";
const users = [
    { id: "1", name: "Paschal", email: "paschal@example.com" },
    { id: "2", name: "Jane", email: "jane@example.com" },
];
const resolver = {
    Query: {
        hello: () => "Hello, world!",
        user: (_, { id }) => users.find((user) => user.id == id),
        users: () => users,
    },
};
module.exports = resolver;
