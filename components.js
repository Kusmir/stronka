class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="container-fluid bg-light shadow-lg">
  <footer class="py-5">
    <div class="container">
      <div class="row d-flex justify-content-around">
        <!-- Navigation Links -->
        <div class="col-6 col-md-3 mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 footer-nav-item">
              <a href="index.html" class="nav-link p-0 text-body-secondary">Strona główna</a>
            </li>

            <li class="nav-item mb-2 footer-nav-item">
              <a href="about.html" class="nav-link p-0 text-body-secondary">O nas</a>
            </li>
            <li class="nav-item mb-2 footer-nav-item">
              <a href="offer.html" class="nav-link p-0 text-body-secondary">Oferta</a>
            </li>
            <li class="nav-item mb-2 footer-nav-item">
              <a href="cennik.html" class="nav-link p-0 text-body-secondary">Cennik</a>
            </li>
            <li class="nav-item mb-2 footer-nav-item">
              <a href="kontakt.html" class="nav-link p-0 text-body-secondary">Kontakt</a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Information -->
        <div class="col-6 col-md-4 mb-3">
          <h5 class="text-body-primary">Kontakt</h5>
          <p class="text-body-secondary">
            ul. Kopernika 6/3<br>
            70-241 Szczecin<br><br>
            biuro@biurodukat.pl<br>
            tel. 91 431 99 05<br>
            tel. kom. 509 448 861
          </p>
        </div>
        
        <!-- Google Maps Embedding -->
        <div class="col-12 col-md-5 mb-3" id="map-container">
          <div class="ratio ratio-16x9">
            <iframe
              class="w-100 h-100"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC1dTuIlsbbQbgyfZP9QvvSxdnmJEuhOn0&q=Biuro+Rachunkowe+Dukat"
              aria-label="Google Maps location of Biuro Rachunkowe Dukat">
            </iframe>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p class="text-body-secondary mb-0">&copy; 2024 Dukat</p>
      </div>
    </div>
  </footer>
</div>
    `;

    var currentPage = window.location.pathname;
    var mapContainer = document.getElementById("map-container")
    if (currentPage.includes("kontakt.html")) {
        mapContainer.style.display = "none";
    }
  }
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top shadow-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <div class="text logo">
                DUKAT
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarList" aria-controls="navbarList" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarList">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link mx-lg-2" href="index.html">Strona główna</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-lg-2" href="about.html">O nas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-lg-2" href="offer.html">Oferta</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-lg-2" href="cennik.html">Cennik</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-lg-2" href="kontakt.html">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>

        `;
    document.addEventListener("DOMContentLoaded", function() {
        var currentPage = window.location.pathname.split("/").pop();
        var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        navLinks.forEach(function(link) {
            var linkHref = link.getAttribute("href");
            if (currentPage === linkHref) {
                link.classList.add("active")
            }
        });
    });
  }
}


customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
