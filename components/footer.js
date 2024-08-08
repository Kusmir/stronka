class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="container-fluid bg-light shadow-lg">
            <div class="container">
            <footer class="py-5">
                <div class="row">
                <div class="col-6 col-md-2 mb-3">
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
                        <a href="kontakt.html" class="nav-link p-0 text-body-secondary">Kontakt</a>
                    </li>
                    </ul>
                </div>
            
                <div class="col-6 col-md-5 offset-md-1 mb-3">
                    <form>
                    <h5 class="text-body-primary">Kontakt</h5>
                    <p class="text-body-secondary">
                    Ulica 69/420 <br>
                    Szczecin, 12-345 <br> <br>
                    xd@mail.com <br>
                    tel: 123456789
                    </p>
                    </form>
                </div>
                </div>
            
                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p class="text-body-secondary">&copy; 2024 Company, Inc. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    `;
    }
}

customElements.define('footer-component', Footer);

