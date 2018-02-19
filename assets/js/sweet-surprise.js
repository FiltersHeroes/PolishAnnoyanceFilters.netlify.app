$(document).ready(function() {
$('form').submit(function() { 
if ($('input[type="text"]#url').val().length > 0) {
    return false;
}
});
});
