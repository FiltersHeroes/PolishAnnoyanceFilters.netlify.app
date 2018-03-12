function removeImage(){
        if (document.querySelector('#imageUploaded') !== null)
        {
            $("input[type='file']").removeAttr('id');
            var dropzone=document.getElementsByClassName("dropzone")[0];
            dropzone.style.backgroundImage = '';
            dropzone.style.backgroundRepeat = '';
            dropzone.style.backgroundSize = '';
            dropzone.style.backgroundPosition = '';
            var element = document.querySelector(".dropzone p");
            element.style.display = '';
            var url=document.getElementById('entry.449338657');
            url.value='';
        }
}

