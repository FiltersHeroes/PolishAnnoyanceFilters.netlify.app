$(document).ready(function(){
	// Dodatkowe informacje
	var additional_easyMDE = new EasyMDE({
		autoDownloadFontAwesome: false,
		autoRefresh: { delay: 300 },
		autosave: {
			enabled: true,
			uniqueId: "additionalInfoPCC",
			delay: 1000,
			submit_delay: 5000,
			text: "Zapisano: ",
			timeFormat: {
				locale: 'pl',
			},
		},
		imageTexts: {
			sbInit: 'Przeciągnij i upuść zrzuty ekranu, aby wysłać je na imgur.',
			sbOnDragEnter: 'Upuść obraz, aby go przesłać na imgur.',
			sbOnDrop: 'Wysyłanie obrazu #images_names#',
			sbProgress: 'Wysyłanie #file_name#: #progress#%',
			sbOnUploaded: 'Wysłano #image_name#'
		},
		element: document.getElementById('additionalInfoTA'),
		forceSync: true,
		hideIcons: ["side-by-side", "fullscreen"],
		showIcons: ["code", "table", "upload-image"],
		spellChecker: false,
		status: ["autosave", "upload-image"],
		uploadImage: true,
		imageUploadFunction: function (file, onSuccess, onError) {
			var headers = new Headers({
				'authorization': 'Client-ID f496e5618f2d73c'
			});
			var form = new FormData();
			form.append('image', file);
			fetch('https://api.imgur.com/3/image', {
				method: 'post',
				headers: headers,
				body: form
			})
				.then(response => response.json())
				.then(result => {
					if (result.success) {
						onSuccess(result.data.link);
					}
				})
				.catch((error) => {
					onError(error);
				});
		},
	});
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
