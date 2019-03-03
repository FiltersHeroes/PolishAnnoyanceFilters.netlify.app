// Based on https://gist.github.com/roachhd/698db516c17bb130c495
var d = document.querySelector("body"),
t = document.querySelector("#darkLightButton"),
table = document.querySelector("table"),
m = localStorage.getItem("dark-mode");

if(m == "true") {
    switchDark();
}

if (t)
{
    t.addEventListener("click", function(){
        if(d.classList.contains("dark-mode")) {
            d.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "false");
            if(table){
                table.classList.remove("table-dark");
                table.classList.add("table-white");
            }
        } else {
            localStorage.setItem("dark-mode", "true");
            switchDark();
        }
    });
}

function switchDark()
{
    d.classList.add("dark-mode");
    if(table){
        table.classList.remove("table-white");
		table.classList.add("table-dark");
    }
}
