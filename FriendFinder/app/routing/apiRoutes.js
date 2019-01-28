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
           console.log(answers);
           
           for (let j = 0; j < friends[i].scores.length; j++) {
               totalDiff += Math.abs(answers[j] - newFriend.scores[j]);
            //    console.log("Difference: " + totalDiff);
               
            }
            diffArray.push(totalDiff);
            totalDiff = 0;
        }
        
        var value = 1000;
        var candidate = 0; 
        for (i = 0; i < diffArray.length; i++) {
           if (diffArray[i] < value) {
            //    console.log("i = " + i);
               
               value = diffArray[i];
               candidate = i;

           }
        }
        // console.log(candidate);
        
        match = friends[candidate];
        // console.log(match);
       
        console.log("Your match is " + friends[candidate].name);

         friends.push(newFriend);
         res.json(friends[candidate]);
        });
        
};
