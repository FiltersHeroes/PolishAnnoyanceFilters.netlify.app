---
title: Zgłoszenia
permalink: issues
layout: default
---
<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe"
style="display:none;" onload="if(submitted)
{window.location='issues/thanks';}"></iframe>

<script>
// Modified code from http://www.javascripter.net/faq/browsern.htm

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
    document.getElementById('wersja').value = fullVersion;

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
</script>

<p>Przed zgłoszeniem sprawdź czy masz włączone listy: <a href="abp:subscribe?location=https%3A%2F%2Feasylist.to%2Feasylist%2Feasylist.txt&amp;title=EasyList">EasyList</a>, <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fpolish-adblock-filters%2Fadblock.txt&amp;title=Oficjalne%20polskie%20filtry%20do%20AdBlocka%2C%20uBlocka%20i%20AdGuarda">Oficjalne polskie filtry do AdBlocka, uBlocka i AdGuarda</a> oraz <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fadblock_cookies.txt&amp;title=Polskie%20filtry%20ciasteczkowe">Polskie filtry ciasteczkowe</a>. A jeżeli posiadasz uBlocka w wersji niższej niż 1.14.25rc0, to musisz dodatkowo zasubskrybować <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FPolishAnnoyanceFilters%2Fmaster%2FPPB_uBlock_AdGuard.txt&amp;title=Polskie%20filtry%20element%C3%B3w%20irytuj%C4%85cych%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry elementów irytujących - uzupełnienie do uBlocka i AdGuarda</a> i <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fcookies_uB_AG.txt&amp;title=Polskie%20filtry%20ciasteczkowe%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry ciasteczkowe - uzupełnienie do uBlocka i AdGuarda</a>.</p>

<p>Jeśli tworzysz zgłoszenie grupowe i chcesz w nim umieścić kilka serwisów, to dopisz <b>GROUP</b> na początku tytułu. A jeżeli twoja sprawa jest pilna i nie cierpiąca zwłoki, to dopisz <b>URGENT</b> na początku tytułu. Natomiast jeśli dodajesz treści o charakterze erotycznym, to dopisz <b>NSFW</b> na początku tytułu.

<p>Twoje zgłoszenie zostanie opublikowane na GitHubie. Potrzebujemy twojego adresu e-mail, by móc się w razie czego skontaktować. Jednakże twój adres e-mail zostanie udostępniony jedynie dla właściciela repozytorium.</p>
      
<form class="form" id="usrform" action="https://docs.google.com/forms/d/e/1FAIpQLSfMGeBhePTjTP9YOeuKo0YgbOrOg9l6x_5XTV47kLBbOPN1wQ/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">

<label>Adres e-mail</label>
<input name="emailAddress" type="email" placeholder="Twój adres e-mail" aria-required="true" required/>
    <p />
    <p />
    <label>Tytuł zgłoszenia</label>
    <input name="entry.1884702034" type="text" placeholder="Strona.pl" aria-required="true" required/>
    <br />
    <p />
    
    <label>Typ elementu</label>
    <br />
    <input type="checkbox" name="entry.1334297973" value="newsletter" aria-required="true" required />Newsletter (nie popup)
    <br />
    <input type="checkbox" name="entry.1334297973" value="popup"/>Popup (wyskakujące okienko)
    <br />
    <input type="checkbox" name="entry.1334297973" value="push"/>Powiadomienie typu webpush
    <br />
    <input type="checkbox" name="entry.1334297973" value="scrollujący filmik"/>Scrollujący filmik
    <br />
    <input type="checkbox" name="entry.1334297973" value="strzałka"/>Strzałka
    <br />
    <input type="checkbox" name="entry.1334297973" value="widget"/>Widget
    <br />
    <input type="checkbox" name="entry.1334297973" value="błąd"/>Błąd
    <br />
    <p />
    
    <label>Opis zgłoszenia</label>
    <br />
    <textarea rows="8" cols="80" name="entry.523048601" form="usrform" placeholder="Co trzeba zrobić, aby pojawił się element?" required></textarea>
    <p />
    
    <label>Link bezpośredni do strony zawierającej element</label>
    <br />
    <input name="entry.412846605" type="url" size="80" minlength="5" maxlength="80" placeholder="http://www.strona.pl/recenzja" aria-required="true" required>
    <p />
    
    <label>Adres URL do zrzutu ekranu</label> (polecane hostingi to <a href="https://imgur.com/">Imgur</a> i <a href="https://screenshots.firefox.com/">Firefox Screenshots</a>)
    <br />
    <input name="entry.449338657" type="url" size="80" minlength="5" maxlength="80" placeholder="http://www.sourcecertain.com/img/Example.png" aria-required="true" required>
    
    <p />
    <button onclick="browserOSDetect()">Wykryj User-Agent, by uzupełnić pola „system operacyjny" i „przeglądarka internetowa" za mnie</button>
    <p />
    
    <label>System operacyjny</label>
    <br />
    <input type="radio" name="entry.634915560" id="linux" value="Linux" aria-required="true" required />Linux
    <br />
    <input type="radio" name="entry.634915560" id="windows" value="Windows"/>Windows
    <br />              
    <input type="radio" name="entry.634915560" id="mac" value="Mac"/>Mac
    <br />              
    <input type="radio" name="entry.634915560" id="android" value="Android"/>Android
    <br />           
    <input type="radio" name="entry.634915560" id="inny" value="__other_option__">Inny: <input type="text" name="entry.634915560.other_option_response" id="platf" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <!--<button onclick="platformDetect()">Wykryj i wpisz za mnie</button>-->
    <br />
    <p />
    
    <label>Przeglądarka internetowa</label>
    <!--<button onclick="browserDetect()">Wykryj i uzupełnij za mnie</button>-->
    <br />
    <input type="radio" name="entry.1077613316" id="firefox" value="Mozilla Firefox" aria-required="true" required />Firefox
    <br />
    <input type="radio" name="entry.1077613316" id="waterfox" value="Waterfox"/>Waterfox
    <br />              
    <input type="radio" name="entry.1077613316" id="chrome" value="Google Chrome"/>Chrome
    <br />              
    <input type="radio" name="entry.1077613316" id="opera" value="Opera"/>Opera
    <br />    
    <input type="radio" name="entry.1077613316" id="vivaldi" value="Vivaldi"/>Vivaldi
    <br />  
    <input type="radio" name="entry.1077613316" id="edge" value="Microsoft Edge"/>Edge
    <br /> 
    <input type="radio" name="entry.1077613316" id="yandex" value="Yandex Browser"/>Yandex
    <br /> 
    <input type="radio" name="entry.1077613316" id="safari" value="Safari"/>Safari
    <br /> 
    <input type="radio" name="entry.1077613316" id="inna" value="__other_option__">Inna: <input type="text" name="entry.1077613316.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <br />
    <p />
    
    <label>Wersja przeglądarki internetowej</label>
    <input name="entry.1188003910" id="wersja" type="text" placeholder="56.0" aria-required="true" required/>
    <br />
    <p />
    
    <label>Bloker</label>
    <br />
    <input type="radio" name="entry.1847630274" value="Nano Adblocker" aria-required="true" required />Nano Adblocker
    <br />
    <input type="radio" name="entry.1847630274" value="uBlock Origin"/>uBlock Origin
    <br />              
    <input type="radio" name="entry.1847630274" value="AdGuard"/>AdGuard
    <br />              
    <input type="radio" name="entry.1847630274" value="AdBlock"/>AdBlock
    <br />    
    <input type="radio" name="entry.1847630274" value="Adblock Plus"/>Adblock Plus
    <br /> 
    <input type="radio" name="entry.1847630274" value="__other_option__">Inny: <input type="text" name="entry.1847630274.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <br />
    <p />
    
    <label>Wersja blokera</label>
    <input name="entry.1171563019" type="text" placeholder="1.0.0.29" aria-required="true" required/>
    <br />
    <p />
    
    <label>Używane filtry</label> (możesz po prostu zamieścić link do <a href="https://github.com/MajkiIT/polish-ads-filter/wiki/Jak-stworzy%C4%87,-opublikowa%C4%87-i-za%C5%82adowa%C4%87-kopi%C4%99-zapasow%C4%85-ustawie%C5%84-uBlocka-Origin-lub-Nano-Adblockera">kopii zapasowej</a> ustawień uBlocka/Nano)
    <br />
    <textarea rows="8" cols="80" name="entry.1553187432" form="usrform" placeholder="Polskie filtry elementów irytujących, Polskie filtry ciasteczkowe, Oficjalne polskie filtry do AdBlocka, uBlocka i AdGuarda " required></textarea>
    <br />
    <p />
    
    <button type="submit" class="btn">Wyślij</button>
</form>