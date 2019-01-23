const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.get("/survey", function(req, res) {
    return res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

router.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname, "app/public/home.html"));
});

module.exports = router;