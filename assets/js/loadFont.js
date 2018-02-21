$(function() {
    var fonts = 'https://fontlibrary.org/face/architect-s-daughter';
    if (document.createStyleSheet) document.createStyleSheet(fonts);
    else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
});
