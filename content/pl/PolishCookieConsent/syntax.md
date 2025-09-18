---
title: Składnia Polskiej Ciasteczkowej Zgody
type: simple
---
## Składnia Polskiej Ciasteczkowej Zgody, obowiązująca od wersji 1.43.5 (stara składnia jest dostępna [tutaj](/PolishCookieConsent/old-syntax/)). {class="display-6 border-bottom border-primary mb-3 text-center"}

Filtry należy zapisywać wg schematu: `domena.com##+js(funkcja, arg, arg2)` lub `/^regex/##+js(funkcja, arg, arg2)`.

Jeżeli chcemy zastosować tę samą funkcję z tymi samymi argumentami do paru domen, to wtedy domeny należy oddzielić przecinkiem, np. `domena.com,domena2.com,domena.org##+js(funkcja, arg, arg2)`.

**Dostępne są następujące funkcje:**
{{< PCCNewSyntaxTable dataset="CookieConsentNewSyntax" >}}
