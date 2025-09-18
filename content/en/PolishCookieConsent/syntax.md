---
title: Polish Cookie Consent Syntax
type: simple
---
## Polish Cookie Consent Syntax (applicable from the 1.43.5 version). {class="display-6 border-bottom border-primary mb-3 text-center"}

Filters should be written according to the scheme: `domain.com##+js(function, arg, arg2)` or `/^regex/##+js(function, arg, arg2)`.

If we want to apply the same function with the same arguments to several domains, then domains should be separated with a comma, e.g. `domain.com,domain2.com,domain.org##+js(function, arg, arg2)`.

**The following functions are available:**
{{< PCCNewSyntaxTable dataset="CookieConsentNewSyntax" >}}
