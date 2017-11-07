const express = require("express");
const app = express();
const volleyball = require("volleyball");

app.use(volleyball);

app.get("/", (req, res) => {
    //console.log("REQUEST: " + Object.keys(req));
    res.status(200).send("Hoooo!!!");
    //console.log("RESPONSE: ", Object.keys(res));
    //console.log("RESPONSE: ", res.statusCode);
});

app.listen(3000);