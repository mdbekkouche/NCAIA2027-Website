/******************************************************************************
 *
 * NCAIAC 2027
 * search.js
 *
 ******************************************************************************/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchableItems = document.querySelectorAll(".search-item");

    if (!searchInput || searchableItems.length === 0) {
        return;
    }

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        searchableItems.forEach(function (item) {

            const text = item.textContent.toLowerCase();

            if (text.includes(keyword)) {

                item.style.display = "";

            } else {

                item.style.display = "none";

            }

        });

    });

});