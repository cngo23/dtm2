$( "#addchild" ).on( "click", function ( event ) {
    event.preventDefault();

    var name = $( "#nameInput" ).val().trim();
    var age = $( "#ageInput" ).val().trim();

    var newStudent = {
      name: name,
      age: age
     
    }

    $( "#nameInput" ).val( '' );
    $( "#ageInput" ).val( '' );

    $.post( "/dashboard/addstud", newStudent, function ( req, res ) {

    } )
  } )