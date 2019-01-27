var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
     });
     
     app.post("/api/friends", function(req, res) {
         var newFriend = req.body;
         var match;
         var totalDiff = 0;
         var diffArray = [];
         for (let i = 0; i < friends.length; i++) {
            var answers = friends[i].scores;
            for (let i = 0; i < answers.length; i++) {
              totalDiff += Math.abs(answers[i] - newFriend.scores[i]);
            }
            diffArray.push(totalDiff);
        }

        var value = 10;
        var candidate = 0;
        for (let i = 0; i < diffArray.length; i++) {
            if (diffArray[i] < value) {
                value = diffArray[i];
                candidate = i;
            }
        }
        console.log("Your match is " + match.name);
        friends.push(newFriend);
        return res.json(newFriend);
    });
};