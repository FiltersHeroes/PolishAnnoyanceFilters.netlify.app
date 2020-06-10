$(document).ready(function() {
    $('form').submit(function() {
        if ($('input[type="text"]#email').val().length > 0) {
            $('#usrform').attr('action', '/');
            return false;
        }
        else if ("submittedTime" in localStorage &&
        new Date().getHours() == new Date(localStorage.getItem("submittedTime")).getHours() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getDate() &&
        new Date().getMonth() == new Date(localStorage.getItem("submittedTime")).getMonth() &&
        new Date().getFullYear() == new Date(localStorage.getItem("submittedTime")).getFullYear() &&
        new Date().getMinutes() - new Date(localStorage.getItem("submittedTime")).getMinutes() < 3) {
                $('#usrform').attr('action', '/');
                Swal.fire("Zbyt często wysyłasz zgłoszenia!", "Musisz odczekać co najmniej 3 minuty przed wysłaniem kolejnego zgłoszenia 😞", "error");
                return false;
        }
        else {
            Swal.fire({title: "Zgłoszenie zostało wysłane na GitHuba!", text: "Dziękujemy za wypełnienie formularza 😊", icon: "success", confirmButtonText: "Wypełnij nowy formularz"}).then((result)=>{if(result.value){document.getElementById("usrform").reset();location.reload();}})
        }
    });
});
