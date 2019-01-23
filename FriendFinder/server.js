const express = require("express");
const path = require("path");
const app = express();
var htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");
const friends = require("./app/data/friends");
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/htmlRoutes", htmlRoutes);


app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);    
})