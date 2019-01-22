const express = require("express");
const path = require("path");
const app = express();
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const friends = require("./app/data/friends");
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

console.log(friends);


app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);    
})