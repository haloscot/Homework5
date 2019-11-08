$( document ).ready(function() {

    var date = moment().format();
    $('#today').text(date);

    var now = moment().get('hour');
    console.log(date.hour);








    //button click save event
    // $( "#saveBtn" ).click(function() {
    //     $( this ).click(function() {
    //         console.log("that was clicked!");
    //     });
    //   });
});



