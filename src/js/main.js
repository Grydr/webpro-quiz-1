// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import { Collapse } from 'bootstrap'

const navBar = document.querySelector("nav");
const navBarContent = `
    <div class="container-fluid gap-4">
      <a class="navbar-brand fw-medium text-primary" href=".">Gryd</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarCollapse">
        <ul class="navbar-nav gap-lg-3 gap-md-2">
          <li><a class="nav-link fw-semibold" href="profile.html">Profile</a></li>
          <li><a class="nav-link fw-semibold" href="hometown.html">Hometown</a></li>
          <li><a class="nav-link fw-semibold" href="local-food.html">Local Food</a></li>
          <li><a class="nav-link fw-semibold" href="tourist-places.html">Tourist Places</a></li>
        </ul>
      </div>
    </div>
`;

if (navBar.className.length === 0) {
    navBar.classList.add("navbar");
    navBar.classList.add("navbar-expand-md");
}

if (navBar.innerHTML.length === 0) {
    navBar.innerHTML = navBarContent;
}