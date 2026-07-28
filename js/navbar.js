/******************************************************************************
 *
 * NCAIAC 2027
 * navbar.js
 *
 ******************************************************************************/

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================================
      Elements
    ==========================================================*/

    const navbar = document.querySelector(".navbar");

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");

    const navbarToggler =
        document.querySelector(".navbar-toggler");

    /*==========================================================
      Sticky Navbar
    ==========================================================*/

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");

            navbar.classList.add("navbar-scrolled");

        }

        else{

            navbar.classList.remove("shadow");

            navbar.classList.remove("navbar-scrolled");

        }

    });

    /*==========================================================
      Highlight Current Page
    ==========================================================*/

    const currentPage =
        window.location.pathname.split("/").pop();

    navLinks.forEach(function(link){

        const href = link.getAttribute("href");

        if(href===currentPage){

            link.classList.add("active");

        }

    });

    /*==========================================================
      Close Mobile Menu
    ==========================================================*/

    navLinks.forEach(function(link){

        link.addEventListener("click", function(){

            if(navbarCollapse &&
               navbarCollapse.classList.contains("show")){

                navbarToggler.click();

            }

        });

    });

    /*==========================================================
      Smooth Scroll
    ==========================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

    /*==========================================================
      Dropdown Hover (Desktop)
    ==========================================================*/

    if(window.innerWidth>992){

        document.querySelectorAll(".dropdown").forEach(function(dropdown){

            dropdown.addEventListener("mouseenter",function(){

                const menu=this.querySelector(".dropdown-menu");

                if(menu){

                    menu.classList.add("show");

                }

            });

            dropdown.addEventListener("mouseleave",function(){

                const menu=this.querySelector(".dropdown-menu");

                if(menu){

                    menu.classList.remove("show");

                }

            });

        });

    }

    /*==========================================================
      Hide Navbar While Scrolling Down
    ==========================================================*/

    let previousScroll=window.pageYOffset;

    window.addEventListener("scroll",function(){

        const currentScroll=window.pageYOffset;

        if(!navbar) return;

        if(currentScroll>previousScroll &&
           currentScroll>150){

            navbar.style.top="-90px";

        }

        else{

            navbar.style.top="0";

        }

        previousScroll=currentScroll;

    });

});

/*==========================================================
  Scroll Progress Bar
==========================================================*/

window.addEventListener("scroll",function(){

    const progress=document.getElementById("scroll-progress");

    if(!progress) return;

    const totalHeight=

        document.documentElement.scrollHeight-
        document.documentElement.clientHeight;

    const progressHeight=

        (window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});

/******************************************************************************
 End of File
******************************************************************************
******************************************************************************/