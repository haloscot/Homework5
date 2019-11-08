$( document ).ready(function() {

    var date = moment().format('DD MMM YYYY');
    $('#today').text(moment().format('DD MMM YYYY'));

    var now = moment().get('hour');
    console.log(now);








    //button click save event
    // $( "#saveBtn" ).click(function() {
    //     $( this ).click(function() {
    //         console.log("that was clicked!");
    //     });
    //   });
});



