/*!
Modified code from http://www.javascripter.net/faq/browsern.htm
*/

function browserOSDetect() {
    var nAgt = navigator.userAgent;
    var fullVersion  = ''+parseFloat(navigator.appVersion);
    var nameOffset,verOffset,ix;

    var firefox = document.getElementById('firefox');
    var waterfox = document.getElementById('waterfox');
    var chrome = document.getElementById('chrome');
    var opera = document.getElementById('opera');
    var vivaldi = document.getElementById('vivaldi');
    var edge = document.getElementById('edge');
    var yandex = document.getElementById('yandex');
    var safari = document.getElementById('safari');
    var inna = document.getElementById('inna');

    // In Opera 15+, the true version is after "OPR/"
    if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
        fullVersion = nAgt.substring(verOffset+4);
        opera.checked = true;
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        opera.checked = true;
        fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
        fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("Vivaldi"))!=-1) {
        fullVersion = nAgt.substring(verOffset+8);
        vivaldi.checked = true;
    }
    else if ((verOffset=nAgt.indexOf("YaBrowser"))!=-1) {
        fullVersion = nAgt.substring(verOffset+10);
        yandex.checked = true;
    }
    else if ((verOffset=nAgt.indexOf("Edge"))!=-1) {
        fullVersion = nAgt.substring(verOffset+8);
        edge.checked = true;
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        fullVersion = nAgt.substring(verOffset+7);
        chrome.checked = true;
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        safari.checked = true;
        fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
        fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("Waterfox"))!=-1) {
        fullVersion = nAgt.substring(verOffset+9);
        waterfox.checked = true;
    }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        fullVersion = nAgt.substring(verOffset+8);
        firefox.checked = true;
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
            (verOffset=nAgt.lastIndexOf('/')) )
    {
        fullVersion = nAgt.substring(verOffset+1);
        inna.checked=true;
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1){
        fullVersion=fullVersion.substring(0,ix)
    };
    if ((ix=fullVersion.indexOf(" "))!=-1){
        fullVersion=fullVersion.substring(0,ix);
    }
        document.getElementById('browser_version').value = fullVersion;

    var linux = document.getElementById('linux');
    var windows = document.getElementById('windows');
    var mac = document.getElementById('mac');
    var android = document.getElementById('android');
    var inny = document.getElementById('inny');

    if (nAgt.indexOf("Android")!=-1){
        android.checked = true;
    }
    else if (nAgt.indexOf("Windows NT")!=-1){
        windows.checked = true;
    }
    else if (nAgt.indexOf("Mac")!=-1) {
        mac.checked = true;
    }
    else if (nAgt.indexOf("Linux")!=-1) {
        linux.checked = true;
    }
    else {
        inny.checked = true;
    }
}
