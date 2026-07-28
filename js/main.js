/******************************************************************************
 *
 * NCAIAC 2027
 * main.js
 *
 ******************************************************************************/

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /* ==========================================================
       Sticky Navbar
    ========================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
            navbar.classList.add("sticky-top");
        } else {
            navbar.classList.remove("shadow");
        }

    });

    /* ==========================================================
       Smooth Scroll
    ========================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================================
       Active Navigation
    ========================================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    /* ==========================================================
       Back To Top Button
    ========================================================== */

    const topButton = document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topButton.style.display = "block";

            } else {

                topButton.style.display = "none";

            }

        });

        topButton.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================================
       Scroll Reveal
    ========================================================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    /* ==========================================================
       Image Lightbox
    ========================================================== */

    document.querySelectorAll("img[data-lightbox]").forEach(img => {

        img.addEventListener("click", function () {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,0.85)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;

            const image = document.createElement("img");

            image.src = this.src;
            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";

            overlay.appendChild(image);

            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {

                overlay.remove();

            });

        });

    });

    /* ==========================================================
       Loading Spinner
    ========================================================== */

    const spinner = document.getElementById("spinner");

    if (spinner) {

        spinner.style.display = "none";

    }

    /* ==========================================================
       Contact Form Validation
    ========================================================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            const required = form.querySelectorAll("[required]");

            let valid = true;

            required.forEach(input => {

                if (input.value.trim() === "") {

                    input.classList.add("is-invalid");

                    valid = false;

                } else {

                    input.classList.remove("is-invalid");

                }

            });

            if (!valid) {

                e.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    }

    /* ==========================================================
       Footer Current Year
    ========================================================== */

    const year = document.getElementById("currentYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});

/******************************************************************************
 * Utility Functions
 ******************************************************************************/

function openPage(url) {

    window.location.href = url;

}

function openEmail(address) {

    window.location.href = "mailto:" + address;

}

/******************************************************************************
 * End of File
 ******************************************************************************/