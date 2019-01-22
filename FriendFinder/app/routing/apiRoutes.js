const express = require("express");
const app = express();
const router = express.Router();

app.get("/api/friends", function(req, res) {
   return res.json(friends);
});

app.post("api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

module.exports = router;