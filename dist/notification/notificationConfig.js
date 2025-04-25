"use strict";
require("dotenv").config(); // import dotenv
const pusher = require("pusher");
const pusherConfig = {
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: process.env.PUSHER_useTLS,
};
const pusherInstance = new pusher(pusherConfig);
module.exports = pusherInstance;
