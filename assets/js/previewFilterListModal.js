function createPreviewModal(modalTitle, url, modalURL) {
    if (document.getElementById("modalPreview") == null) {
        var modal = document.createElement('div');
        modal.setAttribute('class', 'modal fade');
        modal.setAttribute('tabindex', "-1");
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('id', 'modalPreview');
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
        modalHeader.appendChild(title);
        var a = document.createElement('a');
        var titleText = document.createTextNode(modalTitle);
        a.appendChild(titleText);
        a.setAttribute('href', url);
        title.appendChild(a);
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
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', modalURL);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '600px');
        iframe.setAttribute('sandbox', '');
        modalBody.appendChild(iframe);
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

    $('#modalPreview').modal('show');

    $('#modalPreview').on('hidden.bs.modal', function () {
        $('#modalPreview').remove();
    })

}
