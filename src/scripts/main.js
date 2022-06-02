"use strict";

//Copyright
let date = new Date();
let year = date.getFullYear();
let outputCopyright = document.querySelector("#js__copyright");
outputCopyright.innerHTML = year;