// $(document).ready(function () {
//     $( "#addsome" ).on( "click", function () {
//         console.log("here")
//         event.preventDefault();

//         var name = $( "#nameInput" ).val().trim();
//         var age = $( "#ageInput" ).val().trim();

//         var newStudent = {
//           name: name,
//           age: age

//         }

//         $( "#nameInput" ).val( '' );
//         $( "#ageInput" ).val( '' );

//         console.log(newStudent);

//         $.post( "/dashboard/addstud", newStudent, function ( data, callback ) {
//             console.log(req);

//         } ).then(function (data) {
//             console.log(data)
//         })
//       } )

// })

$(document).ready(function () {
    console.log("we live ") 
    $("#addsome").on("click", test)
    function test() {
        console.log("here") 
        var name = $("#nameInput").val().trim();
        var age = $("#ageInput").val().trim();
        var newStudent = {
            name: name,
            age: age
        }
        console.log(newStudent) 
        $("#nameInput").val('');
        $("#ageInput").val('');
        console.log(newStudent) 
        $.post("/dashboard/addstud", newStudent, function (data, cb) {
            console.log(data)
        }).then(function (data) {
            if (data) {
                alert("student was added");
            }
        });
    }
})