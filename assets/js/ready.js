$(document).ready(function(){
	autosize($('textarea'));
	$('#usrform').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSfMGeBhePTjTP9YOeuKo0YgbOrOg9l6x_5XTV47kLBbOPN1wQ/formResponse');

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

function checkAdblocker(){
	var annoyance = document.querySelector("#pafdetect");
	var pafadguard = document.querySelector('#pafadguard');

	if((typeof(pafDetect) != 'undefined') && pafDetect === true)
	{
		Swal.fire("Wspaniale!", "Masz aktywny uBlock Origin z Polskimi Filtrami Elementów Irytujących 😊", "success");
	}
	else if(pafadguard.offsetHeight == 0)
	{
		Swal.fire("Bardzo dobrze!", "Masz aktywny AdGuard z Polskimi Filtrami Elementów Irytujących 😊", "success");
	}
	else if(annoyance.offsetHeight == 0)
	{
		Swal.fire({
			title: 'Dobrze, choć mogłoby być lepiej!',
			icon: 'warning',
			html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z Polskimi Filtrami Elementów Irytujących. Zalecamy zamienić go na <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a>, by zniknęło więcej elementów irytujących.'
		})
	}
	else
	{
		Swal.fire({
			title: 'Bardzo źle!',
			icon: 'error',
			text: 'Nie masz aktywnych Polskich Filtrów Elementów Irytujących 😞',
		})
		$("button.swal2-confirm").replaceWith('<a class="swal2-confirm swal2-styled" style="border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);" onclick="Swal.close();" href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FPolishAnnoyanceFilters%2Fmaster%2FPPB.txt&amp;title=Polskie%20Filtry%20Element%C3%B3w%20Irytuj%C4%85cych">Subskrybuj Polskie Filtry Elementów Irytujących</a>');
	}
}
