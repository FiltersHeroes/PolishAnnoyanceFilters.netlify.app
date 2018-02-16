---
title: Zgłoszenia
permalink: issues
layout: default
---
<script src="/assets/js/autosize.min.js"></script> 
<script>var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe"
style="display:none;" onload="if(submitted)
{window.location='issues/thanks';}"></iframe>
<script src="/assets/js/browserOSDetect.js"></script> 
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    autosize($('textarea'));
});
</script>

<p>Przed zgłoszeniem sprawdź czy masz włączone listy: <a href="abp:subscribe?location=https%3A%2F%2Feasylist.to%2Feasylist%2Feasylist.txt&amp;title=EasyList">EasyList</a>, <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fpolish-adblock-filters%2Fadblock.txt&amp;title=Oficjalne%20polskie%20filtry%20do%20AdBlocka%2C%20uBlocka%20i%20AdGuarda">Oficjalne polskie filtry do AdBlocka, uBlocka i AdGuarda</a> oraz <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fadblock_cookies.txt&amp;title=Polskie%20filtry%20ciasteczkowe">Polskie filtry ciasteczkowe</a>. A jeżeli posiadasz uBlocka w wersji niższej niż 1.14.25rc0, to musisz dodatkowo zasubskrybować <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FPolishAnnoyanceFilters%2Fmaster%2FPPB_uBlock_AdGuard.txt&amp;title=Polskie%20filtry%20element%C3%B3w%20irytuj%C4%85cych%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry elementów irytujących - uzupełnienie do uBlocka i AdGuarda</a> i <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fcookies_uB_AG.txt&amp;title=Polskie%20filtry%20ciasteczkowe%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry ciasteczkowe - uzupełnienie do uBlocka i AdGuarda</a>.</p>

<p>Twoje zgłoszenie zostanie opublikowane na GitHubie.</p>
      
<form class="form" id="usrform" action="https://docs.google.com/forms/d/e/1FAIpQLSfMGeBhePTjTP9YOeuKo0YgbOrOg9l6x_5XTV47kLBbOPN1wQ/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">

<!--Tytuł zgłoszenia-->
    <div class="form-group">
    <label for="title" class="font-weight-bold">Tytuł zgłoszenia</label>
    <input class="form-control form-control-lg" id="title" name="entry.1884702034" type="text" placeholder="strona.pl" aria-required="true" required/>
    </div>

<!--Tryb(y) zgłoszenia-->
    <div class="form-group">
    <label class="font-weight-bold">Tryb(y) zgłoszenia</label> 
      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="urgent" value="PILNE">
        <label class="custom-control-label" for="urgent">Pilna sprawa</label>
      </div>
      
      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="group" value="GRUPA">
        <label class="custom-control-label" for="group">Grupa stron (kilka serwisów z tej samej grupy, np. Grupa WP)</label>
      </div>

      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="nsfw" value="NSFW">
        <label class="custom-control-label" for="nsfw">Treści o charakterze erotycznym</label>
      </div>
    </div>

<!--Typ(y) elementu(ów)-->
    <div class="form-group">
    <label class="font-weight-bold">Typ(y) elementu(ów)</label> 
    
      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="newsletter-type" value="newsletter" aria-required="true" required>
        <label class="custom-control-label" for="newsletter-type">Newsletter (nie popup)</label>
    </div>
      
      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="popup-type" value="popup">
        <label class="custom-control-label" for="popup-type">Popup (wyskakujące okienko)</label>
    </div>
      
      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="push-type" value="push">
        <label class="custom-control-label" for="push-type">Powiadomienie typu webpush</label>
    </div>

      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="scroll_movie-type" value="scrollujący filmik">
        <label class="custom-control-label" for="scroll_movie-type">Scrollujący filmik</label>
    </div>

      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="widget-type" value="widget">
        <label class="custom-control-label" for="widget-type">Widget</label>
    </div>

      <div class="custom-control custom-checkbox">
        <input name="entry.1334297973" type="checkbox" class="custom-control-input" id="error-type" value="błąd">
        <label class="custom-control-label" for="error-type">Błąd</label>
    </div>
    </div>
    
<!--Link bezpośredni do strony zawierającej element--> 
    <div class="form-group">
        <label for="entry.412846605" class="font-weight-bold">Link bezpośredni do strony zawierającej element</label> 
        <input id="entry.412846605" name="entry.412846605" minlength="5" placeholder="http://www.strona.pl/recenzja" type="url" class="form-control here" aria-required="true" required>
    </div> 

<!--Adres URL do zrzutu ekranu-->
    <div class="form-group">
        <label for="entry.449338657" class="font-weight-bold">Adres URL do zrzutu ekranu</label> 
        <input id="entry.449338657" name="entry.449338657" minlength="5" placeholder="http://www.img.pl/Example.png" type="url" class="form-control here" aria-describedby="entry.449338657HelpBlock" aria-describedby="screenHelp" aria-required="true" required>
        <small id="screenHelp" class="form-text text-muted">Polecane hostingi to <a href="https://imgur.com/">Imgur</a> i <a href="https://screenshots.firefox.com/">Firefox Screenshots</a>.</small> 
    </div> 
    
<!--Przycisk-->
    <p>
    <button class="btn wrap" onclick="browserOSDetect()">Wykryj User-Agent, by uzupełnić pola „system operacyjny" i „przeglądarka internetowa" za mnie</button>
    </p>

<!--System operacyjny-->
    <div class="form-group">
        <label class="font-weight-bold">System operacyjny</label> 

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://png.icons8.com/color/24/000000/linux.png" alt="Linux"> <input name="entry.634915560" type="radio" id="linux" class="custom-control-input" value="Linux" aria-required="true" required>
            <label class="custom-control-label" for="linux">Linux</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://png.icons8.com/color/24/000000/windows8.png" alt="Windows">
            <input name="entry.634915560" type="radio" class="custom-control-input" id="windows" value="Windows">
            <label class="custom-control-label" for="windows">Windows</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://png.icons8.com/color/24/000000/mac-os.png" alt="Mac"> <input name="entry.634915560" type="radio" class="custom-control-input" id="mac" value="Mac">
            <label class="custom-control-label" for="mac">Mac</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://png.icons8.com/color/24/000000/android-os.png" alt="Android"> <input name="entry.634915560" type="radio" class="custom-control-input" id="android" value="Android">
            <label class="custom-control-label" for="android">Android</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.634915560" type="radio" class="custom-control-input" id="inny" value="__other_option__">
            <label class="custom-control-label" for="inny">Inny:</label> <input type="text" class="form-control inline" name="entry.634915560.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        </div>
    </div> 
 
<!--Przeglądarka internetowa-->
    <div class="form-group">
        <label class="font-weight-bold">Przeglądarka internetowa</label> 

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/firefox/firefox_24x24.png" alt="Firefox"> <input name="entry.1077613316" type="radio" id="firefox" class="custom-control-input" value="Mozilla Firefox" aria-required="true" required>
            <label class="custom-control-label" for="firefox">Firefox</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/waterfox/waterfox_24x24.png" alt="Waterfox"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="waterfox" value="Waterfox">
            <label class="custom-control-label" for="waterfox">Waterfox</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/chrome/chrome_24x24.png" alt="Chrome"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="chrome" value="Google Chrome">
            <label class="custom-control-label" for="chrome">Chrome</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/opera/opera_24x24.png" alt="Opera"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="opera" value="Opera">
            <label class="custom-control-label" for="opera">Opera</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/vivaldi/vivaldi_24x24.png" alt="Vivaldi"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="vivaldi" value="Vivaldi">
            <label class="custom-control-label" for="vivaldi">Vivaldi</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/edge/edge_24x24.png" alt="Edge"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="edge" value="Microsoft Edge">
            <label class="custom-control-label" for="edge">Edge</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/yandex/yandex_24x24.png" alt="Yandex"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="yandex" value="Yandex Browser">
            <label class="custom-control-label" for="yandex">Yandex</label>
        </div>

        <div class="custom-control custom-radio">
            <img class="img-rbtn" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.3.0/safari/safari_24x24.png" alt="Safari"> <input name="entry.1077613316" type="radio" class="custom-control-input" id="safari" value="Safari">
            <label class="custom-control-label" for="safari">Safari</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1077613316" type="radio" class="custom-control-input" id="inna" value="__other_option__">
            <label class="custom-control-label" for="inna">Inna:</label> <input type="text" class="form-control inline" name="entry.1077613316.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        </div>
    </div> 
    
 <!--Wersja przeglądarki internetowej-->
    <div class="form-group">
        <label for="browser_version" class="font-weight-bold">Wersja przeglądarki internetowej</label>
        <input class="form-control" id="browser_version" name="entry.1188003910" type="text" placeholder="56.0" aria-required="true" required/>
    </div>

<!--Bloker-->
    <div class="form-group">
        <label class="font-weight-bold">Bloker</label> 

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" id="nanoad" class="custom-control-input" value="Nano Adblocker" aria-required="true" required>
            <label class="custom-control-label" for="nanoad">Nano Adblocker</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" class="custom-control-input" id="uBO" value="uBlock Origin">
            <label class="custom-control-label" for="uBO">uBlock Origin</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" class="custom-control-input" id="ADG" value="AdGuard">
            <label class="custom-control-label" for="ADG">AdGuard</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" class="custom-control-input" id="AB" value="AdBlock">
            <label class="custom-control-label" for="AB">AdBlock</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" class="custom-control-input" id="ABP" value="Adblock Plus">
            <label class="custom-control-label" for="ABP">Adblock Plus</label>
        </div>

        <div class="custom-control custom-radio">
            <input name="entry.1847630274" type="radio" class="custom-control-input" id="inny_bloker" value="__other_option__">
            <label class="custom-control-label" for="inny_bloker">Inny:</label> <input type="text" class="form-control inline" name="entry.1847630274.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        </div>
    </div>
 
<!--Wersja blokera-->
    <div class="form-group">
        <label for="blocker_version" class="font-weight-bold">Wersja blokera</label>
        <input class="form-control" id="blocker_version" name="entry.1171563019" type="text" placeholder="1.0.0.29" aria-required="true" required/>
    </div>

<!--Używane filtry-->
    <div class="form-group">
        <label for="entry.1553187432" class="font-weight-bold">Używane filtry</label> 
        <textarea id="entry.1553187432" name="entry.1553187432" rows="3" data-min-rows="3" class="form-control" aria-describedby="filtersHelp" aria-required="true" required></textarea>
        <small id="filtersHelp" class="form-text text-muted">Możesz po prostu zamieścić link do <a href="https://github.com/MajkiIT/polish-ads-filter/wiki/Jak-stworzy%C4%87,-opublikowa%C4%87-i-za%C5%82adowa%C4%87-kopi%C4%99-zapasow%C4%85-ustawie%C5%84-uBlocka-Origin-lub-Nano-Adblockera">kopii zapasowej</a> ustawień uBlocka/Nano.</small> 
    </div>

<!--Opis zgłoszenia-->
    <div class="form-group">
        <label for="entry.523048601" class="font-weight-bold">Opis zgłoszenia</label> 
        <textarea id="entry.523048601" name="entry.523048601" rows="3" data-min-rows="3" class="form-control" placeholder="Co trzeba zrobić, aby pojawił się irytujący element?" aria-required="true" required></textarea>
    </div>
    
<!--Adres e-mail-->
    <div class="form-group">
        <label for="mail" class="font-weight-bold">Adres e-mail</label>
        <input class="form-control" id="mail" name="entry.1171563019" type="text" placeholder="jan@gmail.com" aria-describedby="mailHelp" aria-required="true" required>
        <small id="mailHelp" class="form-text text-muted">Twój adres e-mail zostanie udostępniony jedynie dla właścicieli repozytorium.</small> 
    </div>
    
<!--Wyślij-->
    <button type="submit" class="btn btn-primary">Wyślij</button>    
    
</form>

