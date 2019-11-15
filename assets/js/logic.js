$(document).ready(function() {

    //push date to bottom of jumbotron
    var now = moment().format('DD MMM YYYY');
    $('#currentDay').text(now);

    //get the hour of day to set colours for hour element.
    var hourEl = moment().get('hour');
    console.log(hourEl);

    // change colour of time span based on time of day.
    $(".hour").each(function() {
        var timeIndex = parseInt($(this).attr('value'));
        if (timeIndex < hourEl){
            $(this).addClass( "past" );
            console.log(this + " past");
        }
        if (timeIndex === hourEl) {
            $(this).addClass( "present" );
            console.log(this);
        }
        if (timeIndex > hourEl) {
            $(this).addClass( "future" );
            console.log(this);
            console.log("future");
        }
    });


    // //Event listener for all buttons
    // $('#saveBtn').click(function(event) {
    //     var valueAttr = ("data-hour").val();
    //     var notes = JSON.parse(window.localStorage.getItem("#description"));
    //     console.log('clicked', $(this.text()));
    //     alert("Save button clicked!");
    // });

    // $("#saveBtn").click(function() {
    //     var value = $("#saveBtn").index(this)
    //     console.log(value);
    // });
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

