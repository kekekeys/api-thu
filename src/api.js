const express = require("express");
const serverless = require("serverless-http");
// const { collection, ObjectId } = require("../config/database")

const app = express();


const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List")
})



app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
