$(document).ready(function(){
    autosize($('textarea'));
    $('#usrform').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSfFbscacdIgmavjVXGBTl9wPYaxSZ41YDIdp9oTzeEZId0a9A/formResponse');

    $("#usrform").validate( {
		errorElement: "em",
		messages: {
			"entry.1334297973": "Proszę zaznaczyć przynajmniej jeden typ."
		},
		errorPlacement: function ( error, element ) {
			// Add the `invalid-feedback` class to the error element
			error.addClass( "invalid-feedback" );
			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.next( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).removeClass( "is-invalid" );
		}
	});
});
