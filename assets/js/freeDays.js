$(document).ready(function() {
    var date = new Date();
    var weekOfMonth = (0 | date.getDate() / 7)+1;
    if (date.getDay()==0 && weekOfMonth==1 || date.getDay()==0 && weekOfMonth==2 || date.getDay()==0 && weekOfMonth==4)
    {
        alert("Dzisiaj mamy wolne :-)");
        $("#content-wrapper").hide();
    }
});
