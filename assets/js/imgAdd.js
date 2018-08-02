var feedback = function (res) {
        if (res.success === true) {
             var status = document.querySelector('.status');
                var p = document.createElement('p');
                var t = document.createTextNode('Adres obrazka: ' + res.data.link);
                p.appendChild(t);
                status.classList.add('bg-success');
                status.appendChild(p);

            var inputs = document.getElementsByTagName('input');
        for(var i=0; i<inputs.length; i++){
            if(inputs[i].getAttribute('type')=='file'){
                $('input[type=file]').attr('id', 'imageUploaded');
            }
        }
            var dropzone=document.getElementsByClassName("dropzone")[0];
            var url=document.getElementById('entry.449338657');
            url.value=res.data.link;
            dropzone.style.backgroundImage = 'url(' + res.data.link + ')';
            dropzone.style.backgroundRepeat = 'no-repeat';
            dropzone.style.backgroundSize = 'contain';
            dropzone.style.backgroundPosition = 'center';
            var element = document.querySelector(".dropzone p");
            element.style.display='none';
            console.log(res);
        }
    };

    new Imgur({
        clientid: 'f496e5618f2d73c',
        callback: feedback
    });
