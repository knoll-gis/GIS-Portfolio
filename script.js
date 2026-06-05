/* =========================================================
   Johnathan Knoll — GIS Portfolio
   Main-page behavior: footer year + mobile nav toggle.
   (The full-screen map on map.html initializes itself inline.)
   ========================================================= */

// Wait until the DOM is parsed so target elements exist before we touch them.
document.addEventListener("DOMContentLoaded", function () {

    // --- Footer year -------------------------------------------------------
    // Fills the copyright span with the current year so it never goes stale.
    var yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile navigation toggle -----------------------------------------
    // Opens/closes the collapsed nav on small screens, keeps aria-expanded in
    // sync, and closes the menu after any nav link is tapped.
    var navToggle = document.getElementById("navToggle");
    var mainNav = document.getElementById("mainNav");
    if (navToggle && mainNav) {
        navToggle.addEventListener("click", function () {
            var isOpen = mainNav.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
        mainNav.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                mainNav.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

});
