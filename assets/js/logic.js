$( document ).ready(function() {

    var date = moment().format('DD MMM YYYY');
    $('#today').text(moment().format('DD MMM YYYY'));

    var now = moment().get('hour');
    console.log(now);



    // var table = $('.table').tableToJSON();
    // console.log(table);

    var content = $('.content')
    console.log(content);

    content.text("this is a test! Yo!");


    $(document).on('click', '.content', function(event)
{
	event.preventDefault();

	if($(this).attr('edit_type') == 'button')
	{
		return false;
	}

	//make div editable
	$(this).closest('div').attr('contenteditable', 'true');
	//add bg css
	$(this).addClass('bg-warning');

	$(this).focus();
});

$(document).on('blur', '.content', function(event) {
    $(this).closest('div').attr('contenteditable', 'false');
    $(this).removeClass('bg-warning');
    // $(this).unfocus();

});




    //button click save event
    // $( "#saveBtn" ).click(function() {
    //     $( this ).click(function() {
    //         console.log("that was clicked!");
    //     });
    //   });
});



