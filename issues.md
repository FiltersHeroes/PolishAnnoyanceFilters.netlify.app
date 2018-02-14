---
title: Zgłoszenia
permalink: issues
layout: default
---
<script src="/assets/js/autosize_rows_textarea.js"></script> 
<script>var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe"
style="display:none;" onload="if(submitted)
{window.location='issues/thanks';}"></iframe>
<script src="/assets/js/browserOSDetect.js"></script> 
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>

<p>Przed zgłoszeniem sprawdź czy masz włączone listy: <a href="abp:subscribe?location=https%3A%2F%2Feasylist.to%2Feasylist%2Feasylist.txt&amp;title=EasyList">EasyList</a>, <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fpolish-adblock-filters%2Fadblock.txt&amp;title=Oficjalne%20polskie%20filtry%20do%20AdBlocka%2C%20uBlocka%20i%20AdGuarda">Oficjalne polskie filtry do AdBlocka, uBlocka i AdGuarda</a> oraz <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fadblock_cookies.txt&amp;title=Polskie%20filtry%20ciasteczkowe">Polskie filtry ciasteczkowe</a>. A jeżeli posiadasz uBlocka w wersji niższej niż 1.14.25rc0, to musisz dodatkowo zasubskrybować <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FPolishFiltersTeam%2FPolishAnnoyanceFilters%2Fmaster%2FPPB_uBlock_AdGuard.txt&amp;title=Polskie%20filtry%20element%C3%B3w%20irytuj%C4%85cych%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry elementów irytujących - uzupełnienie do uBlocka i AdGuarda</a> i <a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FMajkiIT%2Fpolish-ads-filter%2Fmaster%2Fcookies_filters%2Fcookies_uB_AG.txt&amp;title=Polskie%20filtry%20ciasteczkowe%20-%20uzupe%C5%82nienie%20do%20uBlocka%20i%20AdGuarda">Polskie filtry ciasteczkowe - uzupełnienie do uBlocka i AdGuarda</a>.</p>

<p>Twoje zgłoszenie zostanie opublikowane na GitHubie.</p>
      
<form class="form" id="usrform" action="https://docs.google.com/forms/d/e/1FAIpQLSfMGeBhePTjTP9YOeuKo0YgbOrOg9l6x_5XTV47kLBbOPN1wQ/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">

    <div class="form-group">
    <label for="title" class="font-weight-bold">Tytuł zgłoszenia</label>
    <input class="form-control form-control-lg" id="title" name="entry.1884702034" type="text" placeholder="strona.pl" aria-required="true" required/>
    </div>
    
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
    
    <div class="form-group">
        <label for="entry.523048601" class="font-weight-bold">Opis zgłoszenia</label> 
        <textarea id="entry.523048601" name="entry.523048601" rows="3" data-min-rows="3" class="autoExpand form-control" aria-required="true" required></textarea>
    </div>
    
    <div class="form-group">
        <label for="entry.412846605" class="font-weight-bold">Link bezpośredni do strony zawierającej element</label> 
        <input id="entry.412846605" name="entry.412846605" minlength="5" placeholder="http://www.strona.pl/recenzja" type="url" class="form-control here" aria-required="true" required>
    </div> 

    <div class="form-group">
        <label for="entry.449338657" class="font-weight-bold">Adres URL do zrzutu ekranu</label> 
        <input id="entry.449338657" name="entry.449338657" minlength="5" placeholder="http://www.img.pl/Example.png" type="url" class="form-control here" aria-describedby="entry.449338657HelpBlock" aria-required="true" required>
        <small id="entry.449338657HelpBlock" class="form-text text-muted">Polecane hostingi to <a href="https://imgur.com/">Imgur</a> i <a href="https://screenshots.firefox.com/">Firefox Screenshots</a></small> 
    </div> 
    
    <p>
    <button onclick="browserOSDetect()">Wykryj User-Agent, by uzupełnić pola „system operacyjny" i „przeglądarka internetowa" za mnie</button>
    </p>
    
    <p>
    <label>System operacyjny</label>
    <br />
    <input type="radio" name="entry.634915560" id="linux" value="Linux" aria-required="true" required /> Linux
    <br />
    <input type="radio" name="entry.634915560" id="windows" value="Windows"/> Windows
    <br />              
    <input type="radio" name="entry.634915560" id="mac" value="Mac"/> Mac
    <br />              
    <input type="radio" name="entry.634915560" id="android" value="Android"/> Android
    <br />           
    <input type="radio" name="entry.634915560" id="inny" value="__other_option__"> Inny: <input type="text" name="entry.634915560.other_option_response" id="platf" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <br />
    </p>
    
    <br />
    <label>Przeglądarka internetowa</label>
    <br />
    <input type="radio" name="entry.1077613316" id="firefox" value="Mozilla Firefox" aria-required="true" required /> Firefox
    <br />
    <input type="radio" name="entry.1077613316" id="waterfox" value="Waterfox"/> Waterfox
    <br />              
    <input type="radio" name="entry.1077613316" id="chrome" value="Google Chrome"/> Chrome
    <br />              
    <input type="radio" name="entry.1077613316" id="opera" value="Opera"/> Opera
    <br />    
    <input type="radio" name="entry.1077613316" id="vivaldi" value="Vivaldi"/> Vivaldi
    <br />  
    <input type="radio" name="entry.1077613316" id="edge" value="Microsoft Edge"/> Edge
    <br /> 
    <input type="radio" name="entry.1077613316" id="yandex" value="Yandex Browser"/> Yandex
    <br /> 
    <input type="radio" name="entry.1077613316" id="safari" value="Safari"/> Safari
    <br /> 
    <input type="radio" name="entry.1077613316" id="inna" value="__other_option__"> Inna: <input type="text" name="entry.1077613316.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <br />
    
    <p>
    <label>Wersja przeglądarki internetowej</label>
    <br />
    <input name="entry.1188003910" id="wersja" type="text" placeholder="56.0" aria-required="true" required/>
    <br />
    </p>
    <br />

    <label>Bloker</label>
    <br />
    <input type="radio" name="entry.1847630274" value="Nano Adblocker" aria-required="true" required /> Nano Adblocker
    <br />
    <input type="radio" name="entry.1847630274" value="uBlock Origin"/> uBlock Origin
    <br />              
    <input type="radio" name="entry.1847630274" value="AdGuard"/> AdGuard
    <br />              
    <input type="radio" name="entry.1847630274" value="AdBlock"/> AdBlock
    <br />    
    <input type="radio" name="entry.1847630274" value="Adblock Plus"/> Adblock Plus
    <br /> 
    <input type="radio" name="entry.1847630274" value="__other_option__"> Inny: <input type="text" name="entry.1847630274.other_option_response" aria-label="Inna odpowiedź" />​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    <br />
    
    <p>
    <label>Wersja blokera</label>
    <br />
    <input name="entry.1171563019" type="text" placeholder="1.0.0.29" aria-required="true" required/>
    <br />
    </p>
    
    <br />
    <label>Używane filtry</label> (możesz po prostu zamieścić link do <a href="https://github.com/MajkiIT/polish-ads-filter/wiki/Jak-stworzy%C4%87,-opublikowa%C4%87-i-za%C5%82adowa%C4%87-kopi%C4%99-zapasow%C4%85-ustawie%C5%84-uBlocka-Origin-lub-Nano-Adblockera">kopii zapasowej</a> ustawień uBlocka/Nano)
    <br />
    <textarea class="autoExpand" rows="5" data-min-rows="5" name="entry.1553187432" form="usrform" placeholder="Polskie filtry elementów irytujących, Polskie filtry ciasteczkowe, Oficjalne polskie filtry do AdBlocka, uBlocka i AdGuarda " required></textarea>
    
    <p>
    <label>Adres e-mail</label> <i class="fas fa-info-circle gray-tooltip" style="color: gray" data-toggle="tooltip" data-placement="right" title="Potrzebujemy twojego adresu e-mail, by móc się w razie czego skontaktować. Jednakże twój adres e-mail zostanie udostępniony jedynie dla właściciela repozytorium."></i>
    <br />
    <input name="emailAddress" type="email" placeholder="Twój adres e-mail" aria-required="true" required/>
    </p>
    <br />
    
    <br />
    <button type="submit" class="btn btn-primary">Wyślij</button>
    </form>
