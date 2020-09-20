const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const body = document.querySelector("body");

// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
    body.overflow = "hidden";
});
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
    body.overflow = "auto";
});

// set year
date.innerHTML = new Date().getFullYear();

