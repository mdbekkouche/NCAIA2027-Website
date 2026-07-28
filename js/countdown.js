/******************************************************************************
 *
 * NCAIAC 2027
 * countdown.js
 *
 * Conference Date:
 * April 11, 2027
 *
 ******************************************************************************/

"use strict";

/*==========================================================
  Conference Date
==========================================================*/

const conferenceDate = new Date("April 11, 2027 08:00:00").getTime();

/*==========================================================
  Countdown Elements
==========================================================*/

const daysElement = document.getElementById("countdown-days");
const hoursElement = document.getElementById("countdown-hours");
const minutesElement = document.getElementById("countdown-minutes");
const secondsElement = document.getElementById("countdown-seconds");
const messageElement = document.getElementById("countdown-message");

/*==========================================================
  Update Countdown
==========================================================*/

function updateCountdown() {

    const now = new Date().getTime();

    const distance = conferenceDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        if (daysElement) daysElement.textContent = "0";
        if (hoursElement) hoursElement.textContent = "0";
        if (minutesElement) minutesElement.textContent = "0";
        if (secondsElement) secondsElement.textContent = "0";

        if (messageElement) {

            messageElement.innerHTML =
                "<strong>NCAIAC 2027 has started!</strong>";

        }

        return;

    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            /
            1000
        );

    if (daysElement)
        daysElement.textContent = String(days).padStart(2, "0");

    if (hoursElement)
        hoursElement.textContent = String(hours).padStart(2, "0");

    if (minutesElement)
        minutesElement.textContent = String(minutes).padStart(2, "0");

    if (secondsElement)
        secondsElement.textContent = String(seconds).padStart(2, "0");

}

/*==========================================================
  Start Timer
==========================================================*/

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

/******************************************************************************
 * End of File
 ******************************************************************************/