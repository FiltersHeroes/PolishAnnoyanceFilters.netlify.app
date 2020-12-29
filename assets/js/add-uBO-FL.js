function createuBOModal(url) {
        Swal.fire({
            title: 'Ręczna subskrypcja listy filtrów',
            html:
            '<p>Jeśli z jakiegoś powodu nie wyświetlił ci się komunikat z możliwością potwierdzenia subskrypcji, to w miejsce nr 3 wklej adres z listą filtrów.</p><input type="text" id="manualSubscribe" class="form-control" readonly="true" value="'+url+'"><button class="btn btn-light" style="margin-left: 10px;" onclick="copyToClipBoard();" title="kopiuj link">'+
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'+
            '</button><div class="mt-3"><img class="img-fluid" src="/images/uBO_add1.png" alt="ubo" title="klikamy w przycisk ustawień"><img class="img-fluid" src="/images/uBO_add2.png" alt="ubo-settings" title="aktywujemy zakładkę listy filtrów, przewijamy stronę do końca i wklejamy link z listą do pola na dole, potem klikamy zastosuj"></div>',
            showCloseButton: true,
            showCancelButton: false,
            showDenyButton: true,
            focusConfirm: true,
            grow: 'row',
            confirmButtonText: "Zamknij",
            denyButtonText: "Nie pokazuj więcej tych instrukcji",
        }).then((result) => {
            if (result.isDenied) {
                localStorage.setItem('showManualSubscribe', 'false')
            }
        })
}

var pafDetect = true;
if((typeof(pafDetect) != 'undefined') && pafDetect === true) {
    let a = document.querySelectorAll("a[href]");
    for(var i in a){
        if(a[i].href && a[i].href.match('^abp:subscribe')) {
            a[i].onclick = function()
            {
                createuBOModal(decodeURIComponent(this.href).replace("abp:subscribe?location=", "").replace(/&(amp;)?title=.*$/,""));
                return false;
            };
        }
    }
}

function copyToClipBoard() {
    var copyText = document.getElementById("manualSubscribe");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
}