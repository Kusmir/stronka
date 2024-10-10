function loadGoogleMapsEmbedding() {
    const mapPlaceholder = document.getElementById('mapPlaceholder');
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC1dTuIlsbbQbgyfZP9QvvSxdnmJEuhOn0&q=Biuro+Rachunkowe+Dukat";
    iframe.class = "w-100 h-100";
    iframe.loading = "lazy";
    iframe.allowFullscreen = "";
    iframe.ariaLabel = "Google Maps location of Biuro Rachunkowe Dukat";
    iframe.referrerPolicy = "no-referrer-when-downgrade"

    mapPlaceholder.innerHTML = '';
    mapPlaceholder.appendChild(iframe);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `eexpires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function closeCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
}

function injectCookieBanner() {
    const consentGiven = getCookie('cookie_consent');

    if (!consentGiven) {
        const cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookieBanner';
        cookieBanner.innerHTML = `
        <div
            class="container-fluid floating-banner bg-light py-2 border shadow-lg"
        >
            <div class="row align-items-center">
                <div class="col-md-2 col-3">
                    <img src="img/cookie.svg" class="img-fluid" alt="" />
                </div>
                <div class="col-md-10 text-left">
                    <div class="row">
                        <h4>Cenimy prywatność użytkowników</h4>
                        <span>Dla Państwa wygody strona internetowa używa plików cookies, które są zapisywane na dysku urządzenia końcowego użytkownika, po to, by dostosować serwis do potrzeb użytkowników, a także w celach statystycznych.</span
                        >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-10 text-left">
                    <div class="row" id="cookiesButtons">
                        <button
                            class="col-3 btn btn-primary btn-md mx-1"
                            id="adjustCookiesButton"
                        >
                            Dostosuj
                        </button>
                        <button
                            class="col-3 btn btn-primary btn-md mx-1"
                            id="declineCookiesButton"
                        >
                            Odrzuć
                        </button>
                        <button
                            class="col-3 btn btn-primary btn-md mx-1"
                            id="acceptCookiesButton"
                        >
                            Akceptuj
                        </button>
                    </div>
                    <div class="row" id="cookieOptions" style="display: none; margin-top: 10px;">
                        <h5>Ustawienia Cookies</h5>
                        <div class="mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkFunctionalCookies" checked disabled>
                                <label class="form-check-label" for="checkFunctionalCookies">
                                    <strong>Funkcjonalne (wymagane) </strong>– obejmuje wyłącznie pliki cookie, które zapewniają podstawowe funkcje i zabezpieczenia strony internetowej i są niezbędne do prawidłowego funkcjonowania strony internetowej. Te pliki cookie nie przechowują żadnych danych osobowych.
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkAnalyticsCookies" enabled>
                                <label class="form-check-label" for="checkAnalyticsCookies">
                                    <strong>Analityczne </strong>– służą do pomiaru zaangażowania użytkowników i generowania statystyk na temat serwisu w celu lepszego zrozumienia, jak jest używany. Jeśli zablokujesz ten rodzaj cookies nie będziemy mogli zbierać informacji o korzystaniu z serwisu i nie będziemy w stanie monitorować jego wydajności.
                                </label>
                            </div>
                        </div>
                        <div class="row" id="preferencesButtons">
                            <button
                                class="col-lg-4 col btn btn-primary btn-md mx-2"
                                id="savePreferencesCookiesButton"
                            >
                                Zapisz ustawienia
                            </button>
                            <button
                                class="col-lg-4 col btn btn-primary btn-md mx-2"
                                id="acceptSettingsCookiesButton"
                            >
                                Akceptuj
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.appendChild(cookieBanner);

        document.getElementById('acceptCookiesButton').addEventListener('click', function() {
            setCookie('cookie_consent', 'accepted', 365);
            closeCookieBanner();
        });

        document.getElementById('declineCookiesButton').addEventListener('click', function() {
            setCookie('cookie_consent', 'declined', 365);
            closeCookieBanner();
        });

        document.getElementById('adjustCookiesButton').addEventListener('click', function() {
            const cookieOptions = document.getElementById('cookieOptions');
            if (cookieOptions.style.display === 'none') {
                console.log('should be shown')
                const buttons = document.getElementById('cookiesButtons');
                buttons.style.display = 'none';

                const savePreferencesButton = document.getElementById('savePreferencesCookiesButton');
                savePreferencesButton.addEventListener('click', function() {
                    const acceptedAnalytics = document.getElementById('checkAnalyticsCookies').checked
                    if (acceptedAnalytics)
                        setCookie('cookie_consent', 'accepted', 365);
                    else
                        setCookie('cookie_consent', 'declined', 365);

                    closeCookieBanner();
                })

                const acceptSettingsCookiesButton = document.getElementById('acceptSettingsCookiesButton');
                acceptSettingsCookiesButton.addEventListener('click', function() {
                    setCookie('cookie_consent', 'declined', 365);
                    closeCookieBanner();
                })

                cookieOptions.style.display = 'block';
            } else {
                cookieOptions.style.display = 'none';
            }
        })
    }
}

addEventListener("DOMContentLoaded", (event) => {
    injectCookieBanner()
    console.log("cookie banner injected")
})
