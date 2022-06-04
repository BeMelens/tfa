"use strict";

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