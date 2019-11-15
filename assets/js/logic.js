$(document).ready(function() {

    //push date to bottom of jumbotron
    var now = moment().format('DD MMM YYYY');
    $('#currentDay').text(now);

    //get the hour of day to set colours for hour element.
    var hourEl = moment().get('hour');

    var test = $(".hour");

    // change colour of time span based on time of day.
    $.each(test, function() {
        if ($( this ).attr('value') > hourEl) {
            test.addClass( "future" );
            console.log(test);
        }
        else if ($( this ).attr('value') === hourEl) {
            test.addClass( "present" );
        }
        else {
            test.addClass( "past" );
        }
    });


    //Event listener for all buttons
    $('#saveBtn').click(function(event) {
        var valueAttr = ("data-hour").val();
        var notes = JSON.parse(window.localStorage.getItem("#description"));
        console.log('clicked', $(this.text()));
        alert("Save button clicked!");
    });

    $("#saveBtn").click(function() {
        var value = $("#saveBtn").index(this)
        console.log(value);
    });
});


// additional functions:

// Copy text from text area to clipboard

// function copyToClipboard() {
//   var passwordText = document.querySelector("#password");

//   passwordText.select();
//   document.execCommand("copy");

//   alert(
//     "Your password " + passwordText.value + " was copied to your clipboard."
//   );
// }

// local storage set/get

// function printHighscores() {
//   // either get scores from localstorage or set to empty array
//   var notes = JSON.parse(window.localStorage.getItem("#description")) || [];

//   // sort highscores by score property in descending order
//   notes.sort(function(a, b) {
//     return b.score - a.score;
//   });
// }

