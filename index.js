const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 0
});
ScrollReveal().reveal('.hero_left img', {delay: 0, opacity: 0, origin: 'top'})
ScrollReveal().reveal('.hero_right', {delay: 250, opacity: 0, origin: 'right'})
ScrollReveal().reveal('.abt-left', {delay: 150, opacity: 0, origin: 'left'})
ScrollReveal().reveal('.abt-right', {delay: 650, opacity: 0, origin: 'right'})

ScrollReveal().reveal('.event-heading', {delay: 250, opacity: 0, origin: 'top'})
ScrollReveal().reveal('.card-left', {delay: 150, opacity: 0, origin: 'left'})
ScrollReveal().reveal('.card-cent', {delay: 250, opacity: 0, origin: 'bottom'})
ScrollReveal().reveal('.card-right', {delay: 150, opacity: 0, origin: 'right'})

ScrollReveal().reveal('.team-container h1', {delay: 250, opacity: 0, origin: 'top'})
ScrollReveal().reveal('.terminal', {delay: 500, opacity: 0, origin: 'bottom'})
ScrollReveal().reveal('.cw-left', {delay: 250, opacity: 0, origin: 'left'})
ScrollReveal().reveal('.cw-mid', {delay: 250, opacity: 0})
ScrollReveal().reveal('.cw-right', {delay: 250, opacity: 0, origin: 'right'})

// ---------------------------------------------------------------------------------------------------------------------------------------------------

var typed = new Typed(".auto-type",{
    strings: ["^500CODEC"],
    typeSpeed:150,
    backSpeed:150,
    showCursor: false
})

var typed = new Typed(".auto-type-para",{
    strings: ["^1800the coding club...", "the competitive club...", "the challenging club...","inclusivity brings<br>excellence"],
    typeSpeed:50,
    backSpeed:20,
    loop:false,/*Change this*/
    showCursor: false
})
// TEAM SECTION
var typed = new Typed(".blue-line",{
    strings: ["codec@suas:"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".dollar",{
    strings: ["^400~$"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".command-exec",{
    strings: ["^800cd /files/codec"],
    typeSpeed:50,
    backSpeed:0,
    loop:false,
    showCursor:false
})

var typed = new Typed(".blue-line-two",{
    strings: ["^2200codec@suas:"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".command-exec-two",{
    strings: ["^2500cd /files/codec"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".dollar-two",{
    strings: ["^3000~$"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".command-exec-three",{
    strings: ["^3200chmod +x codecTeam.sh"],
    typeSpeed:50,
    backSpeed:0,
    loop:false,
    showCursor:false
})

var typed = new Typed(".blue-line-three",{
    strings: ["^5200codec@suas:"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".command-exec-four",{
    strings: ["^5800cd /files/codec"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".dollar-three",{
    strings: ["^6200~$"],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".command-exec-five",{
    strings: ["^6500./codecTeam.sh"],
    typeSpeed:50,
    backSpeed:0,
    loop:false,
    showCursor:false
})
var typed = new Typed(".green-info",{
    strings: ["^7800Program executed successfully..."],
    typeSpeed:0,
    backSpeed:0,
    loop:false,
    showCursor:false
})
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}