---
title: Inne filtry do adblokerów
---
{{< table "LISTA" "ELEMENTY" "LINKI" "WYMAGANE" "ZGODNOŚĆ" >}}
  {{< table-row >}}
    {{% table-cell %}}Oficjalne Polskie Filtry do AdBlocka, uBlocka Origin i AdGuarda{{% /table-cell %}}
    {{< table-cell >}}Reklamy zewnętrzne, linki afiliacyjne i skrypty antyadblockowe.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/adblock.txt" title="Oficjalne Polskie Filtry do AdBlocka, uBlocka Origin i AdGuarda" issues="https://github.com/MajkiIT/polish-ads-filter/issues" chat="https://discord.me/polskiefiltry" mail="errors@certyficate.it" donate="https://patronite.pl/polskiefiltry" home="https://www.certyficate.it/">}}{{< /table-cell >}}
    {{< table-cell >}}
    {{<abp-required location="https://easylist.to/easylist/easylist.txt" title="EasyList">}}
    {{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}

  {{< /table-row >}}
  {{< table-row >}}
    {{% table-cell %}}Polskie Filtry Rodo-Ciasteczkowe (Cookies) *{{% /table-cell %}}
    {{< table-cell >}}Komunikaty dot. 🍪 i polityki prywatności/RODO.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/cookies_filters/adblock_cookies.txt" title="Polskie Filtry Rodo-Ciasteczkowe" issues="https://github.com/MajkiIT/polish-ads-filter/issues" chat="https://discord.me/polskiefiltry" mail="errors@certyficate.it" home="https://www.certyficate.it/">}}{{< /table-cell >}}
    {{< table-cell >}}
    <div class="btn-group-vertical">
    {{<abp-required location="https://easylist.to/easylist/easylist.txt" title="EasyList">}}
    {{<abp-required location="https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/adblock.txt" title="Polskie Filtry">}}
    {{<required location="https://greasyfork.org/pl/scripts/369153-supplement-for-filterlist-polish-gdpr-cookies-filters-supplement-for-ublock-adguard" title="Skrypt uzupełniający **">}}
    </div>
    {{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}Polskie Filtry Społecznościowe (Social){{% /table-cell %}}
    {{< table-cell >}}Widżety, wyskakujące okienka i ikony społecznościowe.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://github.com/MajkiIT/polish-ads-filter/raw/master/adblock_social_filters/adblock_social_list.txt" title="Polskie Filtry Społecznościowe" issues="https://github.com/MajkiIT/polish-ads-filter/issues" chat="https://discord.me/polskiefiltry" mail="errors@certyficate.it" home="https://www.certyficate.it/">}}{{< /table-cell >}}
    {{< table-cell >}}
    <div class="btn-group-vertical">
    {{<abp-required location="https://easylist.to/easylist/easylist.txt" title="EasyList">}}
    {{<abp-required location="https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/adblock.txt" title="Polskie Filtry">}}
    {{<abp-required location="https://easylist-downloads.adblockplus.org/fanboy-social.txt" title="Fanboy's Social">}}
    </div>
    {{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}Polskie Filtry RSS{{% /table-cell %}}
    {{< table-cell >}}Przyciski RSS i sekcje zawierające przyciski RSS.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://raw.githubusercontent.com/PolishFiltersTeam/PolishRSSFilters/master/polish_rss_filters.txt" title="Polskie Filtry RSS" issues="https://github.com/PolishFiltersTeam/PolishRSSFilters/issues" chat="https://discord.me/polskiefiltry">}}{{< /table-cell >}}
    {{< table-cell >}}
    <div class="btn-group-vertical">
    {{<abp-required location="https://easylist.to/easylist/easylist.txt" title="EasyList">}}
    {{<abp-required location="https://raw.githubusercontent.com/MajkiIT/polish-ads-filter/master/polish-adblock-filters/adblock.txt" title="Polskie Filtry">}}
    {{<abp-required location="https://github.com/MajkiIT/polish-ads-filter/raw/master/adblock_social_filters/adblock_social_list.txt" title="PF Social">}}
    {{<abp-required location="https://easylist-downloads.adblockplus.org/fanboy-social.txt" title="Fanboy's Social">}}
    </div>
    {{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}KAD - Przekręty{{% /table-cell %}}
    {{< table-cell >}}Przekręty SMS, oszustwa, promocja pseudonauki/fake news.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://raw.githubusercontent.com/azet12/KAD/master/KAD.txt" title="KAD - Przekręty" issues="https://github.com/azet12/KAD/issues" mail="kadrep@outlook.com" home="https://azet12.github.io/KAD/" form="https://azet12.github.io/KAD/informacje.html#form1-35">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}AlleBlock{{% /table-cell %}}
    {{< table-cell >}}Zbędne, uciążliwe i potencjalnie niebezpieczne elementy - reklamy, artykuły sponsorowane, czy skrypty śledzące działania użytkowników na Allegro, Ceneo, eBay, OLX i Sprzedajemy.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://alleblock.pl/alleblock/alleblock.txt" title="AlleBlock" issues="https://github.com/maciejtarmas/AlleBlock/issues" mail="blablabla@alleblock.pl" donate="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RN7R64TJLWQW6" home="https://alleblock.pl/">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}AdGuard Base filter{{% /table-cell %}}
    {{< table-cell >}}Reklamy, zawiera również EasyList.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://filters.adtidy.org/extension/ublock/filters/2.txt" title="AdGuard Base filter" issues="https://github.com/AdguardTeam/AdguardFilters/issues" mail="support@adguard.com" home="http://adguard.com/filters.html#english" form="https://reports.adguard.com/new_issue.html">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}AdGuard Mobile Ads filter{{% /table-cell %}}
    {{< table-cell >}}Wszystkie znane mobilne sieci reklamowe.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://filters.adtidy.org/extension/ublock/filters/11.txt" title="AdGuard Mobile Ads filter" issues="https://github.com/AdguardTeam/AdguardFilters/issues" mail="support@adguard.com" home="http://adguard.com/filters.html#mobile" form="https://reports.adguard.com/new_issue.html">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}Nano Defender{{% /table-cell %}}
    {{< table-cell >}}Skrypty antyadblockowe.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt" title="Nano Defender Integration" issues="https://github.com/jspenguin2017/uBlockProtector/issues" home="https://jspenguin2017.github.io/uBlockProtector/">}}{{< /table-cell >}}
    {{< table-cell >}}
    {{<required location="https://github.com/MajkiIT/polish-ads-filter/wiki/Jak-zainstalowa%C4%87-Nano-Defender-na-Firefoksie,-Waterfoksie-albo-(Chr)Operze%3F" title="Instrukcja instalacji">}}
    {{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}NoCoin Filter List{{% /table-cell %}}
    {{< table-cell >}}Skrypty wydobywające kryptowaluty, powodujące zwiększone zużycie CPU i spowalniające prace komputera.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist abp-location="https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt" title="NoCoin Filter List" issues="https://github.com/hoshsadiq/adblock-nocoin-list/issues" home="https://github.com/hoshsadiq/adblock-nocoin-list">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< AB >}}
      {{< ABP >}}
      {{< uBO >}}
      {{< NA >}}
      {{< AG >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}uBlock filters – Resource Abuse{{% /table-cell %}}
    {{< table-cell >}}Skrypty wydobywające kryptowaluty, powodujące zwiększone zużycie CPU i spowalniające prace komputera.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/resource-abuse.txt" title="uBlock filters – Resource Abuse" issues="https://github.com/uBlockOrigin/uAssets/issues" home="https://github.com/uBlockOrigin/uAssets">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}AdGuard Annoyances filter{{% /table-cell %}}
    {{< table-cell >}}Irytujące elementy, w tym powiadomienia o ciasteczkach, widżety stron trzecich i wyskakujące okienka.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://filters.adtidy.org/extension/ublock/filters/14.txt" title="AdGuard Annoyances Filter" issues="https://github.com/AdguardTeam/AdguardFilters/issues" mail="support@adguard.com" home="https://kb.adguard.com/en/general/adguard-ad-filters#annoyances-filter" form="https://reports.adguard.com/new_issue.html">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}uBlock filters – Annoyances{{% /table-cell %}}
    {{< table-cell >}}Irytujące elementy.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances.txt" title="uBlock filters – Annoyances" issues="https://github.com/uBlockOrigin/uAssets/issues" home="https://github.com/uBlockOrigin/uAssets">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< uBO >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}

  {{< table-row >}}
    {{% table-cell %}}Nano filters – Annoyance{{% /table-cell %}}
    {{< table-cell >}}Irytujące elementy, w tym komunikaty dot. ciasteczek, natrętne wiadomości donacyjne, anty-kopiowanie, anty-zaznaczanie i anty-klikanie.{{< /table-cell >}}
    {{< table-cell >}}{{<filterlist ubo-location="https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt" title="Nano filters – Annoyance" issues="https://github.com/NanoAdblocker/NanoFilters/issues" home="https://github.com/NanoAdblocker/NanoFilters">}}{{< /table-cell >}}
    {{< table-cell >}}-{{< /table-cell >}}
    {{< table-cell >}}
      {{< NA >}}
    {{< /table-cell >}}
  {{< /table-row >}}


{{< /table >}}

`*` Jeżeli korzystasz z **Polskich Filtrów Elementów Irytujących**, to nie dodawaj **Filtrów RODO-Ciasteczkowych**, ponieważ są już one w nich zawarte (*nie dotyczy modułów*).

`**` Skrypt ten jest kompatybilny z *Violentmonkey*, *Tampermonkey* i *Greasemonkey*, a my rekomendujemy *Violentmonkey*. Jest on głównie uzupełnieniem do listy **Polskie Filtry RODO-Ciasteczkowe - Uzupełnienie do uBlocka i AdGuarda** i zajmuje się tym, czego nie da się załatwić regułą w uBlocku Origin. Jednakże jeśli korzystasz z AdBlocka/ABP, to oczywiście również możesz zainstalować ten skrypt. Natomiast, w przypadku posiadania *Nano Adblockera*, zamiast instalowania skryptu, można po prostu włączyć listę **Nano filters – Annoyance​​​​​​​​​**, a w przypadku *AdGuarda* - **AdGuard's Annoyance List**.

