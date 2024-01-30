const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("I am an endpoint from server: " + process.env.SERVER_ID || "<unknown id>");
});

app.listen(7777, () => {
    console.log("listening on port 7777");
});