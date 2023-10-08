var tl = gsap.timeline()
tl.from(".nav, .nav-2, .dropdoen-content, .live", {
    y:-100,
    duratiton:1.5,
    delay:0.5,
    opacity:0,
    stagger:0.2, 
})
function myfunction() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("live")
}