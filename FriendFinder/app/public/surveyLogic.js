
var newFriend;

function validation() {
    var valid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") {
            valid = false;
        }
    })
    return valid;
}

$("#submit").on("click", function() {
    if (validation()) {
        newFriend = {
            "name": $("#name").val().trim(),
            "photo": $("#photo").val().trim(),
            "scores": [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        
        $(".form-control").each(function() {
            $(this).val("");
        });

        $("#submit").text("Submit");

        $.post("/api/friends", newFriend, function(data) {
            console.log("Friend added");
            console.log(data);
        })

    } else {
        $("#submit").text("Please fill out the entire form.");
    }    
});
//On Click event - DONE
//create validation: ensure all fields are filled out - DONE
//if all fields are filled => - DONE
//push user inputs into an object called newFriend
    //push all answer values into an array in the object

//Post object into friends.js
