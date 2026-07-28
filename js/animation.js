/******************************************************************************
 *
 * NCAIAC 2027
 * animation.js
 *
 ******************************************************************************/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================================
      Elements to Animate
    ==========================================================*/

    const animatedElements = document.querySelectorAll(
        ".animate, .fade-up, .fade-down, .fade-left, .fade-right, .zoom-in"
    );

    /*==========================================================
      Intersection Observer
    ==========================================================*/

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

    /*==========================================================
      Counter Animation
    ==========================================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(function (counter) {

        const updateCounter = function () {

            const target = Number(counter.dataset.target);

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        const counterObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    updateCounter();

                    counterObserver.unobserve(counter);

                }

            });

        });

        counterObserver.observe(counter);

    });

    /*==========================================================
      Progress Bars
    ==========================================================*/

    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function (bar) {

        const progressObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const value = bar.dataset.progress || "100";

                    bar.style.width = value + "%";

                    progressObserver.unobserve(bar);

                }

            });

        });

        progressObserver.observe(bar);

    });

    /*==========================================================
      Image Fade-in
    ==========================================================*/

    document.querySelectorAll("img.animate-image").forEach(function (image) {

        image.style.opacity = "0";

        image.style.transition = "opacity 1s ease";

        const imageObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    image.style.opacity = "1";

                    imageObserver.unobserve(image);

                }

            });

        });

        imageObserver.observe(image);

    });

});