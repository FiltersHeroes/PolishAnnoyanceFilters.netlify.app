function createuBOModal(url) {
    if (document.getElementById("uBOmodal") == null) {
        var modal = document.createElement('div');
        modal.setAttribute('class', 'modal fade');
        modal.setAttribute('tabindex', "-1");
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('id', 'uBOmodal');
        modal.setAttribute('aria-labelledby', 'myModalLabel');
        var mainContent = document.getElementById("main-content");
        mainContent.appendChild(modal);
        var modalDialog = document.createElement('div');
        modalDialog.setAttribute('class', 'modal-dialog modal-vlg');
        modalDialog.setAttribute('role', 'document');
        modal.appendChild(modalDialog);
        var modalContent = document.createElement('div');
        modalContent.setAttribute('class', 'modal-content');
        modalDialog.appendChild(modalContent);
        var modalHeader = document.createElement('div');
        modalHeader.setAttribute('class', 'modal-header');
        modalContent.appendChild(modalHeader);
        var title = document.createElement('h4');
        title.setAttribute('class', 'modal-title');
        title.setAttribute('id', 'myModalLabel');
        title.textContent = "Ręczna subskrybcja listy filtrów";
        modalHeader.appendChild(title);
        var smallCloseBtn = document.createElement('button');
        smallCloseBtn.setAttribute('type', 'button');
        smallCloseBtn.setAttribute('class', 'close');
        smallCloseBtn.setAttribute('data-dismiss', 'modal');
        smallCloseBtn.setAttribute('aria-label', 'Close');
        modalHeader.appendChild(smallCloseBtn);
        var span = document.createElement('span');
        span.setAttribute('aria-hidden', 'true');
        smallCloseBtn.appendChild(span);
        var x = document.createTextNode("x");
        smallCloseBtn.appendChild(x);
        var modalBody = document.createElement('div');
        modalBody.setAttribute('class', 'modal-body');
        modalContent.appendChild(modalBody);
        modalBody.innerHTML = '<p>W miejsce 3 wklej adres z listą filtrów </p>'+'<code ><input type="text" id="manualSubscribe" readonly="true" value="'+url+'"</input></code><button class="btn btn-light" style="margin-left: 10px;" onclick="copyToClipBoard();"><i class="icon-copy" title="kopiuj link"></i></button><pre><img src="/images/uBO_add1.png" alt="ubo" title="klikamy w przycisk ustawień"><img src="/images/uBO_add2.png" alt="ubo-settings" title="aktywujemy zakładkę listy filtrów, przewijamy stronę do końca i wklejamy link z listą do pola na dole, potem klikamy zastosuj"></pre>';
        var modalFooter = document.createElement('div');
        modalFooter.setAttribute('class', 'modal-footer');
        modalContent.appendChild(modalFooter);
        var closeBtn = document.createElement('button');
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('class', 'btn btn-default');
        closeBtn.setAttribute('data-dismiss', 'modal')
        var closeText = document.createTextNode("Zamknij");
        closeBtn.appendChild(closeText);
        modalFooter.appendChild(closeBtn);
    }

    $('#uBOmodal').modal('show');

    $('#uBOmodal').on('hidden.bs.modal', function () {
        $('#uBOmodal').remove();
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