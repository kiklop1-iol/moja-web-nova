// Hero slider na domovskej stránke

    


// Fade header on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// Scroll reveal animácia
const revealElements = document.querySelectorAll(".reveal");
const onScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("visible");
        }
    });
};
window.addEventListener("scroll", onScroll);
onScroll();
