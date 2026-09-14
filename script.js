// ===========================================================
// LES GÉNIES FILMS — script.js
// ===========================================================

// -----------------------------------------------------------
// Gestion de l'écran de chargement
// -----------------------------------------------------------
window.addEventListener("load", function () {
  var loader = document.getElementById("gf-loader");
  if (!loader) return;
  // Durée de l'animation d'introduction (environ 2.5 secondes)
  setTimeout(function () {
    loader.classList.add("gf-hidden");
  }, 2500);
});

// -----------------------------------------------------------
// Gestion du mode sombre / mode clair (sauvegardé avec localStorage)
// -----------------------------------------------------------
(function () {
  var body = document.body;
  var toggleBtn = document.getElementById("gf-theme-toggle");
  var savedTheme = localStorage.getItem("gf-theme") || "light";

  function applyTheme(theme) {
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    if (toggleBtn) {
      toggleBtn.innerHTML =
        theme === "dark"
          ? '<i class="bi bi-sun-fill"></i> Mode clair'
          : '<i class="bi bi-moon-stars-fill"></i> Mode sombre';
    }
  }

  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = body.classList.contains("theme-dark") ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem("gf-theme", next);
      applyTheme(next);
    });
  }
})();

// -----------------------------------------------------------
// Petite animation du bouton de soutien (page soutenir.html)
// -----------------------------------------------------------
(function () {
  var supportBtn = document.getElementById("gf-support-btn");
  if (!supportBtn) return;
  setInterval(function () {
    supportBtn.classList.toggle("shadow-lg");
  }, 900);
})();

// -----------------------------------------------------------
// Mise en évidence du lien actif dans la navbar
// -----------------------------------------------------------
(function () {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();
