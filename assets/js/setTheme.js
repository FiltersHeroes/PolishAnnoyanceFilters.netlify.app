// Based on https://gist.github.com/roachhd/698db516c17bb130c495
var d = document.querySelector("body"),
t = document.querySelector("#darkLightButton"),
table = document.querySelector("table"),
h2 = document.querySelectorAll("#main-content h2"),
form = document.querySelector("form"),
border = document.querySelector("#border"),
input_form = document.querySelectorAll("input.form-control"),
checkbox = document.querySelectorAll(".custom-checkbox"),
radio = document.querySelectorAll(".custom-radio"),
ua = document.querySelectorAll(".ua"),
textarea = document.querySelectorAll("textarea.form-control"),
m = localStorage.getItem("dark-mode");

if(m == "true") {
    d.classList.add("dark-mode");

    if(t){
        t.classList.remove("darkButton");
        t.classList.add("whiteButton");
    }

    if(table){
        table.classList.remove("table-white");
		table.classList.add("table-dark");
    }

    if(h2){
        for (i = 0; i < h2.length; i++) {
            h2[i].classList.add("dark-mode");
        }
    }

    if(form){
        form.classList.add("dark-mode");
    }

    if(border){
        border.classList.remove("border-lblue-solid");
        border.classList.add("border-dark-mode");
    }

    for (i = 0; i < input_form.length; i++) {
        if(input_form){
            input_form[i].classList.add("dark-mode");
        }
    }

    for (i = 0; i < checkbox.length; i++) {
        if(checkbox){
            checkbox[i].classList.add("checkbox-dark-mode");
        }
    }

    for (i = 0; i < radio.length; i++) {
        if(radio){
            radio[i].classList.add("radio-dark-mode");
        }
    }

    for (i = 0; i < textarea.length; i++) {
        if(textarea){
            textarea[i].classList.add("ta-dark-mode");
        }
    }

    for (i = 0; i < ua.length; i++) {
        if(ua){
            ua[i].classList.add("ua-dark-mode");
        }
    }
}

if (t)
{
    t.addEventListener("click", function(){
        if(d.classList.contains("dark-mode")) {
            d.classList.remove("dark-mode");
            t.classList.remove("whiteButton");
            t.classList.add("darkButton");
            localStorage.setItem("dark-mode", "false");
            for (i = 0; i < h2.length; i++) {
                h2[i].classList.remove("dark-mode");
            }
        } else {
            d.classList.add("dark-mode");
            t.classList.remove("darkButton");
            t.classList.add("whiteButton");
            localStorage.setItem("dark-mode", "true");
            for (i = 0; i < h2.length; i++) {
                h2[i].classList.add("dark-mode");
            }
        }
    });
}
