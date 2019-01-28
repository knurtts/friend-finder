var friends = require("../data/friends");

module.exports = function (app) {

   app.get("/api/friends", function (req, res) {
      res.json(friends);
   });

   app.post("/api/friends", function (req, res) {
      var newFriend = req.body;
      var match;
      var totalDiff = 0;
      var diffArray = [];

      for (let i = 0; i < friends.length; i++) {
         var answers = friends[i].scores
         for (let j = 0; j < answers.length; j++) {
            totalDiff += Math.abs(answers[j] - newFriend.scores[j]);
         }
         diffArray.push(totalDiff);
         totalDiff = 0;
      }

      var value = 1000;
      var candidate = 0;
      for (i = 0; i < diffArray.length; i++) {
         if (diffArray[i] < value) {
            value = diffArray[i];
            candidate = i;
         }
      }

      match = friends[candidate];
      friends.push(newFriend);
      res.json(friends[candidate]);
   });

};