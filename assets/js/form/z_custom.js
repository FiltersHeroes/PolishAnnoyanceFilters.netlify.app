function submitForm(form) {
    // Thanks for http://marcinmazurek.com.pl/polskie-wulgaryzmy
    let badWords = ['chuj', 'chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
        'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
        'cipie', 'dojebać', 'dojebac', 'dojebie', 'dojebał', 'dojebal',
        'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
        'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
        'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
        'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
        'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
        'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
        'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
        'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
        'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
        'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
        'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
        'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
        'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
        'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
        'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
        'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
        'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
        'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
        'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
        'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
        'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
        'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
        'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
        'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
        'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
        'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
        'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
        'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
        'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
        'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
        'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
        'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
        'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
        'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
        'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
        'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
        'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
        'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
        'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
        'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
        'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
        'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
        'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
        'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
        'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
        'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
        'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
        'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
        'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
        'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
        'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
        'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
        'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
        'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
        'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
        'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
        'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
        'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
        'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
        'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
        'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
        'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
        'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
        'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
        'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
        'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
        'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
        'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
        'przypierdalający', 'przypierdalajacy', 'przypierdolić',
        'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
        'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
        'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
        'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
        'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
        'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
        'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
        'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
        'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
        'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
        'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
        'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
        'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
        'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
        'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
        'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
        'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
        'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
        'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
        'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
        'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
        'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
        'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
        'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
        'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
        'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
        'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
        'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
        'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
        'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
        'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
        'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
        'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
        'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
        'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
        'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
        'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
        'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
        'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
        'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
        'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
        'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
        'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
        'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
        'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
        'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
        'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
        'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
        'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
        'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
        'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
        'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby', 'dupę'];

    let txtInput = document.querySelector('#additionalInfo textarea').value;

    let error = 0;
    for (let i = 0; i < badWords.length; i++) {
        var badWord = badWords[i];
        if ((txtInput.toLowerCase()).indexOf(badWord.toString()) > -1) {
            error = error + 1;
        }
    }

    txtInput.value = txtInput.replace(new RegExp(badWords.join("|"), "gi"), "[beep]");

    let txtSubmit = "Zgłoszenie zostało zamieszczone na ";

    let banEnd;
    if (document.querySelector('input[type="text"]#email').value.length > 0 || document.cookie.indexOf('ban=') !== -1) {
        return false;
    }
    else if ("submittedTime" in localStorage &&
        new Date().getHours() == new Date(localStorage.getItem("submittedTime")).getHours() &&
        new Date().getDate() == new Date(localStorage.getItem("submittedTime")).getDate() &&
        new Date().getMonth() == new Date(localStorage.getItem("submittedTime")).getMonth() &&
        new Date().getFullYear() == new Date(localStorage.getItem("submittedTime")).getFullYear() &&
        new Date().getMinutes() - new Date(localStorage.getItem("submittedTime")).getMinutes() < 3) {
        form.setAttribute('action', '/');
        Swal.fire("Zbyt często wysyłasz zgłoszenia!", "Musisz odczekać co najmniej 3 minuty przed wysłaniem kolejnych 😞", "error");
        return false;
    }
    else if (error == 2) {
        Swal.fire({ title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na 2 dni 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        banEnd = new Date(new Date().getTime() + 24 * 2 * 60 * 60 * 1000);
        document.cookie = "ban=1;" + "expires=" + banEnd + ";SameSite=Strict;";
        localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
    }
    else if (error > 2) {
        Swal.fire({ title: "Wyrok administratora", text: "Wpisałeś wulgaryzmy. Być może jesteś trollem albo miałeś zły dzień, ale to nie jest najlepsze wyjście z takiej sytuacji. W związku z czym, dostajesz bana na tydzień 😞", icon: "error", confirmButtonText: "OK" }).then((result) => { if (result.value) { form.reset(); location.reload(); } })
        banEnd = new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000);
        document.cookie = "ban=1;" + "expires=" + banEnd + ";SameSite=Strict;";
        localStorage.setItem("banEnd", banEnd.toLocaleDateString("pl"));
    }
    else {
        const formData = new FormData(form);
        var form_issueTitle = formData.get("entry.1884702034");
        var form_labels = formData.getAll("entry.1334297973");
        var form_labels_combined = form_labels.join(", ");
        var form_directlink = formData.get("entry.412846605");
        var form_os = formData.get("entry.634915560");
        if (form_os == "__other_option__") {
            form_os = formData.get("entry.634915560.other_option_response");
        }
        var form_browser = formData.get("entry.1077613316");
        if (form_browser == "__other_option__") {
            form_browser = formData.get("entry.1077613316.other_option_response");
        }
        var form_browser_version = formData.get("entry.1188003910");
        var form_blocker = formData.get("entry.1847630274");
        if (form_blocker == "__other_option__") {
            form_blocker = formData.get("entry.1847630274.other_option_response");
        }
        var form_blocker_version = formData.get("entry.1171563019");
        var form_used_filterlists = formData.get("entry.1553187432");
        var form_nickname = formData.get("entry.770287256");
        var form_additionalInfo = formData.get("entry.249974698");

        var directLink_answer = "";
        if (form_directlink != "") {
            directLink_answer = "### Link bezpośredni\n ```markdown\n" + form_directlink + "\n\n```\n\n";
        }

        var additionalInfo_answer = "";
        if (form_additionalInfo != "") {
            additionalInfo_answer = `### Dodatkowe informacje mogące mieć znaczenie
${form_additionalInfo}
            `
        }


        var form_issueBody = `<!--### Typ elementu lub problemu
${form_labels_combined}
-->

### Moja konfiguracja
**System operacyjny**: ${form_os}
**Przeglądarka internetowa**: ${form_browser} ${form_browser_version}
**Bloker**: ${form_blocker} ${form_blocker_version}
**Używane listy filtrów**:
${form_used_filterlists}


${directLink_answer}


${additionalInfo_answer}


---
Zgłoszenie opublikowane anonimowo przez użytkownika **${form_nickname}**
`

        const formJsonData = {
            "repo": "PolishAnnoyanceFilters",
            "title": form_issueTitle,
            "body": form_issueBody,
            "labels": form_labels
        };

        var formURL = form.getAttribute("data-src");
        fetch(formURL, {
            method: "POST",
            body: JSON.stringify(formJsonData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.text())
            .then((text) => {
                if (text.includes("https://github.com")) {
                    txtSubmit += `<a href="${text}" target="_blank" rel="noopener">${text}</a>.`
                    Swal.fire({ title: "Sukces 😊", html: txtSubmit, icon: "success", confirmButtonText: "Wypełnij nowy formularz" }).then((result) => { if (result.value) { form.reset(); location.reload(); } });
                    localStorage.setItem("submittedTime", new Date());
                }
                else {
                    console.log(text);
                    Swal.fire({ title: "Porażka 😔", text: "Wystąpił błąd w trakcie wysyłania formularza", icon: "error", confirmButtonText: "Spróbuj ponownie" })
                        .then((result) => { if (result.value) { submitForm(form); } });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({ title: "Porażka 😔", text: "Wystąpił błąd w trakcie wysyłania formularza", icon: "error", confirmButtonText: "Spróbuj ponownie" })
                    .then((result) => { if (result.value) { submitForm(form); } });
            });
    }
}

window.addEventListener('load', function () {
    var form = document.querySelector("#annoyanceIssuesForm");
    if (form) {
        detectIncognito().then(function (result) {
            if (result.isPrivate == true) {
                Swal.fire({
                    title: 'Tryb prywatny/incognito',
                    icon: 'error',
                    text: 'Do poprawnego działania formularza wymagane jest wyjście z trybu prywatnego/incognito.'
                })
            }
        });
        // Dodatkowe informacje
        var additional_easyMDE = new EasyMDE({
            autoRefresh: { delay: 300 },
            autosave: {
                enabled: true,
                uniqueId: "additionalInfoTA",
                delay: 1000,
                submit_delay: 5000,
                text: "Zapisano: ",
                timeFormat: {
                    locale: 'pl',
                },
            },
            imageTexts: {
                sbInit: 'Przeciągnij i upuść zrzuty ekranu, aby wysłać je na imgur.',
                sbOnDragEnter: 'Upuść obraz, aby go przesłać na imgur.',
                sbOnDrop: 'Wysyłanie obrazu #images_names#',
                sbProgress: 'Wysyłanie #file_name#: #progress#%',
                sbOnUploaded: 'Wysłano #image_name#'
            },
            element: document.getElementById('additionalInfoTA'),
            forceSync: true,
            hideIcons: ["side-by-side", "fullscreen"],
            showIcons: ["code", "table", "upload-image"],
            spellChecker: false,
            status: ["autosave", "upload-image"],
            uploadImage: true,
            imageUploadFunction: function (file, onSuccess, onError) {
                var headers = new Headers({
                    'authorization': 'Client-ID f496e5618f2d73c'
                });
                var form = new FormData();
                form.append('image', file);
                fetch('https://api.imgur.com/3/image', {
                    method: 'post',
                    headers: headers,
                    body: form
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            onSuccess(result.data.link);
                        }
                    })
                    .catch((error) => {
                        onError(error);
                    });
            },
        });

        // Używane filtry
        var userFilters_easyMDE = new EasyMDE({
            autoRefresh: { delay: 300 },
            autosave: {
                enabled: true,
                uniqueId: "userFiltersTA",
                delay: 1000,
                submit_delay: 5000,
                text: "Zapisano o ",
                timeFormat: {
                    locale: 'pl',
                },
            },
            element: document.getElementById('userFilters'),
            forceSync: true,
            hideIcons: ["side-by-side", "fullscreen", "bold", "italic", "image", "quote"],
            promptURLs: true,
            showIcons: ["code", "table"],
            spellChecker: false,
            status: ["autosave", {
                className: "filtersHelp",
                defaultValue: function (el) {
                    el.innerHTML = 'Możesz po prostu zamieścić link do <a href="https://majkiit.github.io/polish-ads-filter/docs/basic/ubo-backup/" target="_blank" rel="noopener">kopii zapasowej</a> ustawień uBlocka Origin.';
                },
            }]
        });
        if (document.cookie.indexOf('ban=') !== -1) {
            Swal.fire({
                title: 'Wyrok administratora',
                icon: 'error',
                html:
                    "Jesteś zbanowany do " + localStorage.getItem("banEnd") +
                    ", więc nie możesz wypełniać formularzy 😞. Do końca odsiadki proponuję zagrać np. w " +
                    '<a href="https://store.steampowered.com/app/1048540/Kao_the_Kangaroo_Round_2_2003_rerelease/">Kangurka Kao</a> lub ' +
                    '<a href="https://thewitcher.com/pl/witcher3">Wiedźmina 3</a>.',
            });
            form.remove();
        }
        var validatorDictLocale =
            [
                {
                    key: "required",
                    dict: {
                        en: "This field is required",
                        pl: 'To pole jest wymagane',
                    }
                },
                {
                    key: "email",
                    dict: {
                        en: "Email has invalid format",
                        pl: "Email ma nieprawidłowy format",
                    }
                },
                {
                    key: "maxLength",
                    dict: {
                        en: "This field must contain a maximum of :value characters",
                        pl: "To pole może zawierać maksymalnie tylko :value znaków"
                    }
                },
                {
                    key: "minLength",
                    dict: {
                        en: "This field must contain a minimum of :value characters",
                        pl: "To pole powinno zawierać przynajmniej :value znaków"
                    }
                },
                {
                    key: "number",
                    dict: {
                        en: "Value should be a number",
                        pl: "Wartość powinna być liczbą"
                    }
                },
                {
                    key: "maxNumber",
                    dict: {
                        en: "Number should be less or equal than :value",
                        pl: "Liczba powinna być mniejsza lub równa :value"
                    }
                },
                {
                    key: "minNumber",
                    dict: {
                        en: "Number should be more or equal than :value",
                        pl: "Liczba powinna być większa lub równa :value"
                    }
                },
                {
                    key: "Please check at least one option",
                    dict: {
                        en: "Please check at least one option",
                        pl: "Proszę zaznaczyć przynajmniej jedną opcję"
                    }
                },
                {
                    key: "Please select at least one option",
                    dict: {
                        en: "Please select at least one option",
                        pl: "Proszę wybrać przynajmniej jedną opcję"
                    }
                }
            ]
        var validatorConfig = {
            errorFieldCssClass: 'is-invalid',
            errorLabelCssClass: "invalid-feedback",
            validateBeforeSubmitting: true
        }
        var validate = new window.JustValidate(form, validatorConfig, validatorDictLocale);
        var currentLang = document.documentElement.lang;
        if (currentLang == "pl") {
            validate.setCurrentLocale("pl");
        }
        const multiStepForm = new MultiStepForm(form);
        multiStepForm.callbacks.onNext = () => {
            return new Promise(
                (resolve, reject) => {
                    var formStep = form.querySelector(".form-step-active").id.replace("step-", "");
                    switch (formStep) {
                        case "1":
                            validate.addField(
                                '#title',
                                [
                                    {
                                        rule: 'required',
                                    },
                                    {
                                        rule: 'minLength',
                                        value: 5,
                                    },
                                ]
                            );
                            validate.addRequiredGroup(".type", "Please check at least one option");
                            break;
                        case "2":
                            validate.addRequiredGroup("#osRadio", "Please select at least one option");
                            validate.addRequiredGroup("#browserRadio", "Please select at least one option");
                            validate.addField(
                                '#browser_version',
                                [
                                    {
                                        rule: 'required',
                                    },
                                    {
                                        rule: 'minLength',
                                        value: 2,
                                    },
                                ]
                            );
                            break;
                        case "3":
                            validate.addRequiredGroup("#blockerRadio", "Please select at least one option");
                            validate.addField(
                                '#blocker_version',
                                [
                                    {
                                        rule: 'required',
                                    },
                                    {
                                        rule: 'minLength',
                                        value: 2,
                                    },
                                ]).addField(
                                    "#userFilters", [
                                    {
                                        rule: "required",
                                    },
                                    {
                                        rule: 'minLength',
                                        value: 5,
                                    },
                                ]);
                            break;
                        default:
                            break;
                    }
                    validate.revalidate().then((isValid) => {
                        if (!isValid) {
                            resolve(false);
                        }
                        else {
                            resolve();
                        }
                    });
                });
        }
        multiStepForm.run();
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            validate.addField(
                "#nickname",
                [
                    {
                        rule: 'required',
                    },
                    {
                        rule: 'minLength',
                        value: 3,
                    },
                ]
            );
            validate.revalidate().then((isValid) => {
                if (isValid) {
                    submitForm(form);
                }
            });
        });
    }
});

function checkAdblocker() {
    var annoyance = document.querySelector("#pafdetect");
    var pafadguard = document.querySelector('#pafadguard');
    if ((typeof (pafDetect) != 'undefined') && pafDetect === true) {
        Swal.fire("Wspaniale!", "Masz aktywny uBlock Origin z Polskimi Filtrami Elementów Irytujących 😊", "success");
    }
    else if (pafadguard.offsetHeight == 0) {
        Swal.fire("Bardzo dobrze!", "Masz aktywny AdGuard z Polskimi Filtrami Elementów Irytujących 😊", "success");
    }
    else if (annoyance.offsetHeight == 0) {
        Swal.fire({
            title: 'Dobrze, choć mogłoby być lepiej!',
            icon: 'warning',
            html: 'Prawdopodobnie masz aktywny AdBlock/AdBlock Plus z Polskimi Filtrami Elementów Irytujących. Zalecamy zamienić go na <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener">uBlock Origin</a>, by zniknęło więcej elementów irytujących.'
        })
    }
    else {
        Swal.fire({
            title: 'Bardzo źle!',
            icon: 'error',
            text: 'Nie masz aktywnych Polskich Filtrów Elementów Irytujących 😞',
            confirmButtonText: "Subskrybuj Polskie Filtry Elementów Irytujących",
        });
        var swalConfirm = document.querySelector("button.swal2-confirm");
        var aTag = document.createElement('a');
        aTag.innerText = swalConfirm.innerText;
        aTag.classList = swalConfirm.classList;
        aTag.classList.add("btn", "btn-primary");
        aTag.style = swalConfirm.style;
        aTag.href = "abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2FFiltersHeroes%2FPolishAnnoyanceFilters%2Fmaster%2FPPB.txt&amp;title=Polskie%20Filtry%20Element%C3%B3w%20Irytuj%C4%85cych";
        aTag.onclick = function () { Swal.close(); };
        swalConfirm.parentNode.replaceChild(aTag, swalConfirm);
    }
}
