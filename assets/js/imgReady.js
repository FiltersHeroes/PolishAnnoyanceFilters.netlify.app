$(document).ready(function () {
    $("input[type='file']").removeAttr('multiple');
    var element = document.querySelector(".dropzone p");
    element.innerHTML = "Przeciągnij tutaj swój zrzut lub kliknij w tym obszarze, aby wysłać na imgur. Maksymalny rozmiar zrzutu to 20 MB.";
});
