class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <div class="text logo">
                        DUKAT
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarList" aria-controls="navbarList" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-end mw-80" tabindex="-1" id="navbarList">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="index.html#about">O nas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="index.html#certyfikaty">Certyfikaty</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="index.html#kadra">Kadra</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="index.html#oferta">Oferta</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="index.html#kontakt">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
        `
    }
  }
  
  customElements.define('header-component', Header);