$(document).ready(function(){
	autosize($('textarea'));
	$('#usrform').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSfMGeBhePTjTP9YOeuKo0YgbOrOg9l6x_5XTV47kLBbOPN1wQ/formResponse');
});

function checkAdblocker(){
	var annoyance = document.querySelector("#pafdetect");
	var pafadguard = document.querySelector('#pafadguard');

	if((typeof(pafDetect) != 'undefined') && pafDetect === true)
	{
		Swal.fire("Wspaniale!", "Masz aktywny uBlock Origin lub Nano Adblocker z Polskimi Filtrami Elementów Irytujących 😊", "success");
	}
	else if(pafadguard.offsetHeight == 0)
	{
		Swal.fire("Bardzo dobrze!", "Masz aktywny AdGuard z Polskimi Filtrami Elementów Irytujących 😊", "success");
	}
	else if(annoyance.offsetHeight == 0)
	{
		Swal.fire({
			title: 'Dobrze, choć mogłoby być lepiej!',
			type: 'warning',
			html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z Polskimi Filtrami Elementów Irytujących. Zalecamy zamienić go na <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a>, by zniknęło więcej elementów irytujących.'
		})
	}
	else
	{
		Swal.fire({
			title: 'Bardzo źle!',
			type: 'error',
			text: 'Nie masz aktywnych Polskich Filtrów Elementów Irytujących 😞',
		})
		$("button.swal2-confirm").replaceWith('<a class="swal2-confirm swal2-styled" style="border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214);" href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FPolishAnnoyanceFilters%2Fmaster%2FPPB.txt&amp;title=Polskie%20Filtry%20Element%C3%B3w%20Irytuj%C4%85cych">Subskrybuj Polskie Filtry Elementów Irytujących</a>');
	}
}
