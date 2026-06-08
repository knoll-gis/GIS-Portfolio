/* =========================================================
   Johnathan Knoll — GIS Portfolio
   Main-page behavior: footer year + mobile nav toggle.
   (The full-screen map on map.html initializes itself inline.)
   ========================================================= */

// Wait until the DOM is parsed so target elements exist before we touch them.
document.addEventListener("DOMContentLoaded", function () {

// --- Demo video lightbox ----------------------------------------------
    // Opens a modal when any [data-video] button is clicked and loads that
    // card's MP4. Closes on backdrop, close-button, or Escape.
    var videoModal = document.getElementById("videoModal");
    var modalVideo = document.getElementById("modalVideo");
    var lastFocused = null;

    // Load the chosen video, lock scrolling, and autoplay (muted) unless the
    // visitor prefers reduced motion.
    function openVideoModal(src, poster) {
        if (!videoModal || !modalVideo || !src) return;
        modalVideo.src = src;
        if (poster) { modalVideo.setAttribute("poster", poster); }
        lastFocused = document.activeElement;
        videoModal.hidden = false;
        document.body.classList.add("modal-open");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            modalVideo.muted = true;
            modalVideo.play().catch(function () {});
        }
        var closeBtn = videoModal.querySelector(".video-modal-close");
        if (closeBtn) { closeBtn.focus(); }
    }

    // Pause, unload buffered data, restore scrolling, and return focus.
    function closeVideoModal() {
        if (!videoModal || !modalVideo) return;
        modalVideo.pause();
        modalVideo.removeAttribute("src");
        modalVideo.load();
        videoModal.hidden = true;
        document.body.classList.remove("modal-open");
        if (lastFocused) { lastFocused.focus(); }
    }

    // Wire each card button to its own video.
    document.querySelectorAll("[data-video]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            openVideoModal(btn.getAttribute("data-video"), btn.getAttribute("data-poster"));
        });
    });

    // Backdrop / close-button clicks (anything with data-close) and Escape.
    if (videoModal) {
        videoModal.addEventListener("click", function (event) {
            if (event.target.hasAttribute("data-close")) { closeVideoModal(); }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !videoModal.hidden) { closeVideoModal(); }
        });
    }
   
    // Pause, unload buffered data, restore scrolling, and return focus.
    function closeVideoModal() {
        if (!videoModal || !modalVideo) return;
        modalVideo.pause();
        modalVideo.removeAttribute("src");
        modalVideo.load();
        videoModal.hidden = true;
        document.body.classList.remove("modal-open");
        if (lastFocused) { lastFocused.focus(); }
    }

    // Wire each card button to its own video.
    document.querySelectorAll("[data-video]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            openVideoModal(btn.getAttribute("data-video"), btn.getAttribute("data-poster"));
        });
    });

    // Backdrop / close-button clicks (anything with data-close) and Escape.
    if (videoModal) {
        videoModal.addEventListener("click", function (event) {
            if (event.target.hasAttribute("data-close")) { closeVideoModal(); }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !videoModal.hidden) { closeVideoModal(); }
        });
    }
   
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
