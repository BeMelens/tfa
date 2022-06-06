"use strict";

import gsap from 'gsap';
import { _parseRelative } from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

//Copyright
let date = new Date();
let year = date.getFullYear();
let outputCopyright = document.querySelector("#js__copyright");
outputCopyright.innerHTML = year;

//Burger Menu
let button = document.querySelector(".bg_menu");
let nav = document.querySelector(".nav");

button.addEventListener("click", (e)=>{
    if (nav.classList.contains("nav--open")){
        nav.classList.remove("nav--open");
    }else{
        nav.classList.add("nav--open");
    }
});

//GSAP
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({


    //Mobile
    "(max-width: 399px)": function() {

        gsap.from("#gsap_1", {
            position: "relative",
            right: "-400",
            scrollTrigger: {
                trigger: "#gsap_1",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            },
        });

        gsap.from("#gsap_2", {
            position: "relative",
            left: "-400",
            scrollTrigger: {
                trigger: "#gsap_2",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            },
        });

        gsap.from("#gsap_3", {
            position: "relative",
            right: "-400",
            scrollTrigger: {
                trigger: "#gsap_3",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            }
        });

    },

    //Mobile+ / Tablette
    "(min-width: 400px) and (max-width: 1299px)": function() {

        gsap.from("#gsap_1", {
            position: "relative",
            right: "-600",
            scrollTrigger: {
                trigger: "#gsap_1",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            },
        });

        gsap.from("#gsap_2", {
            position: "relative",
            left: "-600",
            scrollTrigger: {
                trigger: "#gsap_2",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            },
        });

        gsap.from("#gsap_3", {
            position: "relative",
            right: "-600",
            scrollTrigger: {
                trigger: "#gsap_3",
                start: "bottom 100%",
                end: "top 30%",
                scrub:0.5
            }
        });

    },

    //Desktop
    "(min-width: 1300px)": function() {

        gsap.to("#gsap_1", {
            position: "relative",
            bottom: "-200",
            scrollTrigger: {
                trigger: "#gsap_1",
                start: "top 40%",
                end: "bottom 20%",
                scrub:0.5
            },
        });

        gsap.to("#gsap_2", {
            position: "relative",
            bottom: "-100",
            scrollTrigger: {
                trigger: "#gsap_2",
                start: "top 50%",
                end: "bottom 50%",
                scrub:0.5
            },
        });

        gsap.to("#gsap_3", {
            position: "relative",
            bottom: "-300",
            scrollTrigger: {
                trigger: "#gsap_3",
                start: "top 20%",
                end: "bottom 0%",
                scrub:0.5
            }
        });

    }
    
});