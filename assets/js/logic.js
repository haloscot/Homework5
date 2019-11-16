$(document).ready(function() {

    var notes = [];

    //push date to bottom of jumbotron
    var now = moment().format('DD MMM YYYY');
    $('#currentDay').text(now);

    //get the hour of day to set colours for hour element.
    var hourEl = moment().get('hour');

    // change colour of each time span element based on (value of) time of day.
    $(".hour").each(function() {
        var timeIndex = parseInt($(this).attr('value'));
        if (timeIndex < hourEl){
            $(this).addClass( "past" );
        }
        if (timeIndex === hourEl) {
            $(this).addClass( "present" );
        }
        if (timeIndex > hourEl) {
            $(this).addClass( "future" );
        }
    });

    // //Event listener for all buttons
    // $('.saveBtn').click(function(event) {
    //     var valueAttr = ("data-hour").val();
    //     var notes = JSON.parse(window.localStorage.getItem("#description"));
    //     console.log('clicked', $(this.text()));
    //     alert("Save button clicked!");
    // });

    function copyText() {
        var copied = $("#description");

        copied.select();
        document.execCommand("copy");

        return copied;

        alert("Your password " + passwordText.value + " was copied to your clipboard.");
      }

    $(".saveBtn").on("click", function() {
        //notes = copyText();
        //Retrieve contents of textarea and save to
        localStorage.setItem("notes", $('#description').text());
        console.log($('#description').text());
        //JSON.stringify(notes)

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

