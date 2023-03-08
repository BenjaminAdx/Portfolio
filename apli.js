/* Menu burger */

let menuEl = document.querySelector(".menu")
let topEl = document.querySelector(".top")
let middleEl = document.querySelector(".middle")
let bottomEl = document.querySelector(".bottom")
let linksPages = document.querySelector(".link_pages")

function menuBurger() {
    topEl.classList.toggle("span1on");
    middleEl.classList.toggle("span2on");
    bottomEl.classList.toggle("span3on");
    linksPages.classList.toggle("linksposition");
}
menuEl.addEventListener("click", menuBurger)
