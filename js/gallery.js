/******************************************************************************
 *
 * NCAIAC 2027
 * gallery.js
 *
 ******************************************************************************/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================================
      Gallery Images
    ==========================================================*/

    const images = document.querySelectorAll(".gallery-image");

    if (images.length === 0) return;

    let currentIndex = 0;

    /*==========================================================
      Create Lightbox
    ==========================================================*/

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `

        <span id="lightbox-close">&times;</span>

        <button id="lightbox-prev">&#10094;</button>

        <img id="lightbox-image" src="" alt="">

        <div id="lightbox-caption"></div>

        <button id="lightbox-next">&#10095;</button>

    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        document.getElementById("lightbox-image");

    const caption =
        document.getElementById("lightbox-caption");

    /*==========================================================
      Show Image
    ==========================================================*/

    function showImage(index){

        currentIndex = index;

        lightboxImage.src = images[index].src;

        caption.textContent =
            images[index].alt || "";

        lightbox.classList.add("show");

    }

    /*==========================================================
      Open Gallery
    ==========================================================*/

    images.forEach(function(image,index){

        image.addEventListener("click",function(){

            showImage(index);

        });

    });

    /*==========================================================
      Close
    ==========================================================*/

    document.getElementById("lightbox-close")
        .addEventListener("click",closeGallery);

    function closeGallery(){

        lightbox.classList.remove("show");

    }

    /*==========================================================
      Previous
    ==========================================================*/

    document.getElementById("lightbox-prev")
        .addEventListener("click",function(){

            currentIndex--;

            if(currentIndex<0){

                currentIndex=images.length-1;

            }

            showImage(currentIndex);

        });

    /*==========================================================
      Next
    ==========================================================*/

    document.getElementById("lightbox-next")
        .addEventListener("click",function(){

            currentIndex++;

            if(currentIndex>=images.length){

                currentIndex=0;

            }

            showImage(currentIndex);

        });

    /*==========================================================
      Keyboard
    ==========================================================*/

    document.addEventListener("keydown",function(event){

        if(!lightbox.classList.contains("show")) return;

        switch(event.key){

            case "Escape":

                closeGallery();

                break;

            case "ArrowLeft":

                document.getElementById("lightbox-prev").click();

                break;

            case "ArrowRight":

                document.getElementById("lightbox-next").click();

                break;

        }

    });

    /*==========================================================
      Click Outside Image
    ==========================================================*/

    lightbox.addEventListener("click",function(event){

        if(event.target===lightbox){

            closeGallery();

        }

    });

});