module.exports = function(app) {
    const friends = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        res.json(friends);
     });
     
     app.post("api/friends", function(req, res) {
         var newFriend = req.body;
     
         console.log(newFriend);
         friends.push(newFriend);
         res.json(true);
     });
}